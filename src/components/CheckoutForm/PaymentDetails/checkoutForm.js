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

const CheckoutForm = ({ Order, stripe, onComplete, formErrors }) => {
  const complete = useMutation(COMPLETE_ORDER)
  const [formStarted, setFormStarted] = useState(false)
  const [errors, setErrors] = useState({})

  const _onChange = ({ elementType, error }) => {
    if (error) setErrors({ ...errors, [elementType]: error.message })

    if (error === undefined) {
      console.log('Found error! >>>', error)
      setErrors(
        Object.keys(errors)
          .filter($ => $ !== elementType)
          .reduce(($, key) => {
            console.log('Mapping >>>>', $, key)
            return {
              ...$,
              [key]: errors[key],
            }
          }, {})
      )
    }
  }

  console.log('Errors >>>>', formErrors, errors)

  return (
    <PaymentForm>
      <div>
        <label>
          Card Number
          <CardNumberElement
            onChange={_onChange}
            onBlur={() => setFormStarted(true)}
          />
        </label>
      </div>

      <div>
        <label>
          Expiry Date
          <CardExpiryElement
            onChange={_onChange}
            onBlur={() => setFormStarted(true)}
          />
        </label>
      </div>

      <div>
        <label>
          CVC
          <CardCVCElement
            onChange={_onChange}
            onBlur={() => setFormStarted(true)}
          />
        </label>
      </div>

      <div>
        <Primary
          disabled={
            !formStarted ||
            Object.values(errors).length ||
            Object.values(formErrors).length
          }
          onClick={() => {
            console.log('Clicking >>>>')
            debugger
            stripe.createToken().then($ => {
              debugger
              console.log('>>>>', $)
              complete({
                variables: {
                  Order,
                  source: $.token.id,
                },
                update: () => onComplete(),
              })
            })
          }}
        >
          Pay Order
        </Primary>
      </div>
    </PaymentForm>
  )
}

export default injectStripe(CheckoutForm)
