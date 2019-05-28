import React, { useState, useEffect } from 'react'
import { Authentication } from './styled'

import uuidv4 from 'uuid/v4'
import auth from '../../services/Auth'

import { useMutation } from 'react-apollo-hooks'
import { UPSERT_USER } from '../../services/Apollo/Mutations/users'

export default ({ client, children }) => {
  const currentUser = auth.getUser()
  const id = currentUser ? currentUser.id : uuidv4()

  const { data, error, loading } = useMutation(UPSERT_USER, {
    variables: {
      id,
    },
  })()

  client.cache.writeData({
    data: {
      user_id: id,
    },
  })

  if (loading) return <div>Loading uuid...</div>

  return <Authentication client={client}>{children}</Authentication>
}
