import React, { useState } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { useQuery, useMutation } from 'react-apollo-hooks'

import { COMPLETE_ORDER } from '../../../services/Apollo/Mutations/order'

import { PaymentForm } from './styled'
import { Primary } from '../../Button'

const CheckoutForm = ({ onComplete, stripe, orderid }) => {
  const [source, setSource] = useState(null)

  if (source) {
    useMutation(COMPLETE_ORDER, {
      variables: {
        orderid,
        source: source.token.id,
      },
      update: () => onComplete(),
    })()
  }

  return (
    <PaymentForm>
      <CardElement
        style={{
          base: {
            iconColor: '#c4f0ff',
            color: 'black',
            border: '1px solid red',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            width: '100%',
          },
        }}
      />

      <br />
      <Primary onClick={() => stripe.createToken().then($ => setSource($))}>
        Pay Order
      </Primary>
    </PaymentForm>
  )
}

export default injectStripe(CheckoutForm)
