import React, { useState } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

import { Checkout } from './styled'
import { Primary } from '../Button'

import { useStateValue } from '../../Context'

const CheckoutForm = ({ stripe, onComplete }) => {
  async function submit(e, setResponse, onComplete) {
    let { error, token } = await stripe.createToken({ name: 'Name' })

    let response = {}
    console.log('token >>>', token, error)

    if (!error) {
      await fetch('http://localhost:3001/orders/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currency: 'gbp',
          items: basket.map($ => {
            return {
              type: 'sku',
              parent: $.id,
            }
          }),
          shipping: {
            name: 'Jenny Rosen',
            address: {
              line1: '1234 Main Street',
              city: 'San Francisco',
              state: 'CA',
              country: 'US',
              postal_code: '94111',
            },
          },
          email: 'jenny.rosen@example.com',
        }),
      })

      onComplete()
    }
  }

  const [{ basket }] = useStateValue()

  const [{ error, status }, setResponse] = useState({
    error: null,
    token: null,
  })

  if (!error && status) return <h1>Purchase Complete</h1>

  return (
    <Checkout>
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
          },
        }}
      />
      <Primary onClick={e => submit(e, setResponse, onComplete)}>
        Make Payment
      </Primary>

      {error && <div>{error.message}</div>}
    </Checkout>
  )
}

export default injectStripe(CheckoutForm)
