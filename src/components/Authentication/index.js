import React, { useState, useEffect } from 'react'
import { Authentication } from './styled'

import uuidv4 from 'uuid/v4'
import auth from '../../services/Auth'

import { useMutation, useQuery } from 'react-apollo-hooks'
import { SIGNUP } from '../../services/Apollo/Mutations/users'
// import { GET_USER } from '../../services/Apollo/Queries/auth'

export default ({ client, children }) => {
  //   const { data, error, loading } = useMutation(UPSERT_USER, {
  //     variables: {
  //       //   id: newId,
  //     },
  //   })()

  //   client.cache.writeData({
  //     data: {
  //       //   user_id: newId,
  //     },
  //   })

  //   if (loading) return <div>Loading uuid...</div>

  return <Authentication client={client}>{children}</Authentication>
}
