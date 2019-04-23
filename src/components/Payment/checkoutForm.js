import React, { useState } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

import { Checkout } from './styled'
import { Primary } from '../Button'

const CheckoutForm = ({ stripe }) => {
  async function submit(e, setResponse) {
    let { error, token } = await stripe.createToken({ name: 'Name' })

    let response = {}

    if (!error) {
      await fetch('http://localhost:3001/charges/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 2000,
          currency: 'gbp',
          source: token.id,
          description: 'Charge for rachel@example.com',
        }),
      })

      console.log('reponse >>>>', response)
    }

    setResponse({ error, status: !response.statusCode === 200 })
  }

  const [{ error, status }, setResponse] = useState({
    error: null,
    token: null,
  })

  if (!error && status) return <h1>Purchase Complete</h1>

  return (
    <Checkout>
      <input placeholder={'name'} />
      <input placeholder={'surname'} />
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
      <Primary onClick={e => submit(e, setResponse)}>Make Payment</Primary>

      {error && <div>{error.message}</div>}
    </Checkout>
  )
}

export default injectStripe(CheckoutForm)
