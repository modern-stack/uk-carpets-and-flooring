import React from 'react'
import { FaCheckCircle, FaShoppingBasket, FaCreditCard } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Title from '../components/Title'
import Steps from '../components/Steps'
import { Summary, SummaryCta } from '../components/Order/Summary'
import { CreateOrder, CreateOrderCta } from '../components/Order/CreateOrder'
import CompleteOrder from '../components/Order/CompleteOrder'

export default () => {
  return (
    <Layout>
      <SEO title="checkout" />

      <Title title={'Checkout'} />

      <Steps>
        <Summary icon={<FaShoppingBasket />} cta={SummaryCta} />
        <CreateOrder icon={<FaCreditCard />} cta={CreateOrderCta} />
        <CompleteOrder icon={<FaCheckCircle />} />
      </Steps>
    </Layout>
  )
}
