import React, { useEffect, useState } from 'react'
import { navigateTo } from 'gatsby-link'

import auth from '../services/Auth'
import { useMutation } from 'react-apollo-hooks'

import { UPDATE_USER } from '../services/Apollo/Mutations/users'

async function Login({ auth, setUser }) {
  const { err, authResult } = await auth.handleAuthentication()

  if (authResult && authResult.accessToken && authResult.idToken) {
    await auth.setSession(authResult)

    setUser({ id: authResult.idToken })

    navigateTo('/')
  }
}

export default () => {
  const [user, setUser] = useState()

  useEffect(() => {
    Login({ auth, setUser })
  }, [])

  if (user) useMutation(UPDATE_USER)

  return <div>Loading...</div>
}
