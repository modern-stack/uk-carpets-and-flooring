import React, { useState, useEffect } from 'react'
import { Authentication } from './styled'

import { useMutation, useQuery } from 'react-apollo-hooks'
import {
  GUEST_SIGNUP,
  TOGGLE_LOGGED_IN,
} from '../../services/Apollo/Mutations/users'

import { SUBSCRIBE_USER } from '../../services/Apollo/Queries/auth'

export default ({ children }) => {
  const [user, setUser] = useState()
  const ToggleLogin = useMutation(TOGGLE_LOGGED_IN, {
    variables: { Status: true },
  })

  useEffect(() => {}, [user])

  if (!user) {
    useMutation(GUEST_SIGNUP, {
      update: (proxy, mutationResult) => {
        ToggleLogin()
        setUser(mutationResult.data)
      },
      refetchQueries: [{ query: SUBSCRIBE_USER }],
    })()
  }

  return (
    <div>
      <Authentication>{children}</Authentication>
    </div>
  )
}
