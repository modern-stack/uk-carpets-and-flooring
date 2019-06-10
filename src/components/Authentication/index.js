import React, { useState, useEffect } from 'react'
import { Authentication } from './styled'

import LoadingOverlay from '../LoadingOverlay'
import { useMutation } from 'react-apollo-hooks'
import { GUEST_SIGNUP } from '../..//services/Apollo/Mutations/users'

export default ({ children }) => {
  const [user, setUser] = useState()
  useEffect(() => {}, [user])

  if (!user) {
    useMutation(GUEST_SIGNUP)().then(({ data }) => setUser(data))
  }

  return (
    <div>
      <LoadingOverlay isVisible={!user} />
      <Authentication>{children}</Authentication>
    </div>
  )
}
