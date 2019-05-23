import React, { useEffect, useState } from 'react'
import { navigateTo } from 'gatsby-link'

async function Login({ auth, user, order, dispatch }) {
  const { err, authResult } = await auth.handleAuthentication()

  if (authResult && authResult.accessToken && authResult.idToken) {
    await auth.setSession(authResult)

    const currentUser = auth.getUser()

    if (currentUser) {
    } else if (err) {
      console.log(err)
    }

    navigateTo('/')
  }
}

export default () => {
  // useEffect(() => {
  //   Login({ auth, user, order, dispatch })
  // }, [])

  return <div>Loading...</div>
}
