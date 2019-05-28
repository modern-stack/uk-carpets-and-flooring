import React, { useEffect, useState } from 'react'
import { navigateTo } from 'gatsby-link'
import uuidv4 from 'uuid/v4'

import auth from '../services/Auth'
import { useMutation } from 'react-apollo-hooks'

import { UPSERT_USER } from '../services/Apollo/Mutations/users'

function Login({ auth, setUser }) {
  return new Promise(async resolve => {
    const { err, authResult } = await auth.handleAuthentication()

    if (authResult && authResult.accessToken && authResult.idToken) {
      await auth.setSession(authResult)

      const { given_name, family_name, email } = authResult.idTokenPayload

      console.log('>>>', authResult)

      setUser({
        id: uuidv4(),
        given_name,
        family_name,
        email,
        stripe_id:
          authResult.idTokenPayload[
            'https://ukcarpetsandflooring/stripe_customer_id'
          ],
      })

      return resolve()
    }
    return resolve()
  })
}

export default () => {
  const [user, setUser] = useState()
  useEffect(() => {
    Login({ auth, setUser })
  }, [])

  console.log('User >>>', user)

  if (user) {
    const { data, error, loading } = useMutation(UPSERT_USER, {
      variables: {
        ...user,
      },
    })()

    navigateTo('/')
  }

  return <div>Loading...</div>
}
