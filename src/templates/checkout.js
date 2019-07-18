import React from 'react'

import SEO from '../components/seo'
import PrismicComponents from '../components/Prismic'

import { FaCheckCircle, FaShoppingBasket, FaCreditCard } from 'react-icons/fa'

import Steps from '../components/Steps'
import { Summary, SummaryCta } from '../components/Order/Summary'
import { CreateOrder, CreateOrderCta } from '../components/Order/CreateOrder'
import CompleteOrder from '../components/Order/CompleteOrder'

import CheckoutForm from '../components/CheckoutForm'

import Modal from '../components/Modal'

export default ({ pageContext }) => {
  return (
    <React.Fragment>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <React.Fragment>
        {pageContext.prismicPage.data.body.map($ => {
          const Component = PrismicComponents[$.slice_type]
          return Component ? <Component {...$} /> : null
        })}

        <Modal>
          <CheckoutForm />
        </Modal>
      </React.Fragment>
    </React.Fragment>
  )
}

{
  /* <Steps>
            <Summary icon={<FaShoppingBasket />} cta={SummaryCta} />
            <CreateOrder icon={<FaCreditCard />} cta={CreateOrderCta} />
            <CompleteOrder icon={<FaCheckCircle />} />
          </Steps> */
}
