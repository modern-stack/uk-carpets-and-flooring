import React from 'react'
import { FaCheckCircle, FaShoppingBasket, FaCreditCard } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Steps from '../components/Steps'
import Order from '../components/Order'
import Payment from '../components/Payment'
import OrderConfirmation from '../components/Confirmation'

export default () => {
  return (
    <Layout>
      <SEO title="Products" />

      <Steps>
        <Order icon={<FaShoppingBasket />} />
        <Payment icon={<FaCreditCard />} />
        <OrderConfirmation icon={<FaCheckCircle />} />
      </Steps>
    </Layout>
  )
}
