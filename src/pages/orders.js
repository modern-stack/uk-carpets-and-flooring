import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Title from '../components/Title'
import MyOrders from '../components/MyOrders'

import { GET_ALL_ORDERS } from '../services/Apollo/Queries/order'

export default () => {
  const { data, loading } = useQuery(GET_ALL_ORDERS)

  if (loading) return <div>Loading</div>

  const { GetAllOrders } = data

  return (
    <Layout>
      <SEO title="order" />

      <Title title={'My Orders'} />
      <MyOrders orders={GetAllOrders} />
    </Layout>
  )
}
