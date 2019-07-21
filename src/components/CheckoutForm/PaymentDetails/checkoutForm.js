import React, { useState } from 'react'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from 'react-stripe-elements'
import { useMutation } from 'react-apollo-hooks'

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
      <div>
        <label>
          Card Number
          <CardNumberElement />
        </label>
      </div>

      <div>
        <label>
          Expiry Date
          <CardExpiryElement />
        </label>
      </div>

      <div>
        <label>
          CVC
          <CardCVCElement />
        </label>
      </div>

      <div>
        <Primary onClick={() => stripe.createToken().then($ => setSource($))}>
          Pay Order
        </Primary>
      </div>
    </PaymentForm>
  )
}

export default injectStripe(CheckoutForm)
