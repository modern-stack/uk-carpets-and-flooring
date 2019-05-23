import React, { useEffect, useState } from 'react'
import { navigateTo } from 'gatsby-link'

import { useStateValue } from '../Context'

async function Login({ auth, user, order, dispatch }) {
  const { err, authResult } = await auth.handleAuthentication()

  if (authResult && authResult.accessToken && authResult.idToken) {
    await auth.setSession(authResult)

    const currentUser = auth.getUser()

    if (currentUser) {
      dispatch({
        type: 'User:Update',
        payload: {
          ...currentUser,
          stripeId:
            currentUser['https://ukcarpetsandflooring/stripe_customer_id'],
        },
      })

      dispatch({
        type: 'Order:Update',
        payload: {
          email: currentUser.email,
          shipping: {
            ...order.shipping,
            name: `${currentUser.given_name} ${currentUser.family_name}`,
          },
        },
      })
    } else if (err) {
      console.log(err)
    }

    navigateTo('/')
  }
}

export default () => {
  const [{ auth, user, order }, dispatch] = useStateValue()

  useEffect(() => {
    Login({ auth, user, order, dispatch })
  }, [])

  return <div>Loading...</div>
}
