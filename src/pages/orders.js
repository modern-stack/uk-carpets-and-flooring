import React, { useState, useEffect } from 'react'
import firebase from '../services/firebase'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Authentication from '../components/Authentication'

function Orders() {
  const [loading, toggleLoading] = useToggle(true)
  const [orders, setOrders] = useState([])
  const [user, setUser] = useState({ email: '' })

  console.log('user >>>', user)

  useEffect(async () => {
    firebase.auth.onAuthStateChanged(async $ => {
      if (!$) {
        toggleLoading()
      }

      if ($) {
        const currentUser = await firebase.db.ref(
          `server/saving-data/fireblog/posts/${$.uid}`
        )

        if (currentUser.stripeId) {
          const response = await fetch(
            `http://localhost:3000/orders/list?email=${$.email}`
          )
          setOrders(await response.json())
        }
        setUser($)
      }
    })

    console.log('User >>>>', user)
  }, [])

  return (
    <Layout>
      <SEO title="Products" />
      <Authentication>
        <h1>Orders</h1>
        {loading && <div>Loading...</div>}
        {!orders.length && <div>No Orders Available</div>}
        {!loading && orders.length && orders.map(($, i) => <div>{i}</div>)}
      </Authentication>
    </Layout>
  )
}

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState)

  return [state, () => setState(!state)]
}

export default Orders
