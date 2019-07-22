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

const CheckoutForm = ({ Order, stripe, onComplete }) => {
  const complete = useMutation(COMPLETE_ORDER)
  const [validation, setValdation] = useState({
    number: false,
    expiry: false,
    cvc: false,
  })

  const { number, expiry, cvc } = validation

  const isValid =
    !!number & !!expiry & !!cvc & !!Order.postal_code && !!Order.line_1

  return (
    <PaymentForm>
      <div>
        <label>
          Card Number
          <CardNumberElement
            onChange={$ => setValdation({ ...validation, number: $.complete })}
          />
        </label>
      </div>

      <div>
        <label>
          Expiry Date
          <CardExpiryElement
            onChange={$ => setValdation({ ...validation, expiry: $.complete })}
          />
        </label>
      </div>

      <div>
        <label>
          CVC
          <CardCVCElement
            onChange={$ => setValdation({ ...validation, cvc: $.complete })}
          />
        </label>
      </div>

      <div>
        <Primary
          disabled={!isValid}
          onClick={() =>
            stripe.createToken().then($ => {
              console.log('Order >>>', Order, $.token.id)

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
