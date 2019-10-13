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

const CheckoutForm = ({ Order, stripe, onComplete, errors }) => {
  const complete = useMutation(COMPLETE_ORDER)

  console.log('errors >>>>', errors)

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
        <Primary
          disabled={!errors}
          onClick={() =>
            stripe.createToken().then($ => {
              complete({
                variables: {
                  Order,
                  source: $.token.id,
                },
                update: () => onComplete(),
              })
            })
          }
        >
          Pay Order
        </Primary>
      </div>
    </PaymentForm>
  )
}

export default injectStripe(CheckoutForm)
