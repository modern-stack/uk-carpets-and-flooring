import React from 'react'
import { Payment } from './styled'

import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

export default () => (
  <Payment>
    <StripeProvider apiKey="pk_test_j8D2dhgBhWY1ToEZm9NsrF48">
      <div className="example">
        <h1>React Stripe Elements Example</h1>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
  </Payment>
)
