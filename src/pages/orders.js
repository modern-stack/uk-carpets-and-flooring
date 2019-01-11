import React, { useState, useEffect, useReducer } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => {
  const [loading, toggleLoading] = useToggle(true)
  const [orders, setOrders] = useState([])

  useEffect(async () => {
    const response = await fetch('http://localhost:3000/orders/list')
    setOrders(await response.json())

    toggleLoading()
  }, [])

  return (
    <Layout>
      <SEO title="Products" />
      <h1>Orders</h1>
      {loading && <div>Loading...</div>}
      {!loading && orders.map(($, i) => <div>{i}</div>)}
    </Layout>
  )
}

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState)

  return [state, () => setState(!state)]
}
