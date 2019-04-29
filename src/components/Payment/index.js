import React from 'react'
import { Payment, PaymentDetails } from './styled'

import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './checkoutForm'

import Title from '../Title'

export default ({ onComplete }) => (
  <Payment>
    <StripeProvider apiKey="pk_test_j8D2dhgBhWY1ToEZm9NsrF48">
      <PaymentDetails>
        <Title title={'Enter Payment'} />
        <Elements>
          <CheckoutForm onComplete={onComplete} />
        </Elements>
      </PaymentDetails>
    </StripeProvider>
  </Payment>
)
