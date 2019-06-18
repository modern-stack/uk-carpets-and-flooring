import React, { useState, useEffect } from 'react'
import { Authentication } from './styled'

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
      <Authentication>{children}</Authentication>
    </div>
  )
}
