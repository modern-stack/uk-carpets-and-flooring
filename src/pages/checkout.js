import React from 'react'
import { FaCheckCircle, FaShoppingBasket, FaCreditCard } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Steps from '../components/Steps'
import Order from '../components/Order'
import CreateOrder from '../components/Order/CreateOrder'
import CompleteOrder from '../components/Order/CompleteOrder'

export default () => {
  return (
    <Layout>
      <SEO title="Products" />

      <Steps>
        <Order icon={<FaShoppingBasket />} />
        <CreateOrder icon={<FaCreditCard />} />
        <CompleteOrder icon={<FaCheckCircle />} />
      </Steps>
    </Layout>
  )
}
