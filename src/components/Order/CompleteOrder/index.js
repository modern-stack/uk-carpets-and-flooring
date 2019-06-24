import React from 'react'
import { Payment, PaymentDetails } from './styled'

import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from '../CompleteOrder/checkoutForm'

export default ({ onComplete }) => (
  <Payment>
    hello
    {/* <StripeProvider apiKey="pk_test_j8D2dhgBhWY1ToEZm9NsrF48">
      <PaymentDetails>
        <Elements>
          <Title title={'Personal Details'} />
          <CheckoutForm onComplete={onComplete} />
        </Elements>
      </PaymentDetails>
    </StripeProvider> */}
  </Payment>
)
