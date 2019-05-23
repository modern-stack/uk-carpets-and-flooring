import React, { useState, useEffect } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

import Api from '../../Api'

import Address from './Address'

import { Checkout } from './styled'
import { Primary } from '../Button'
import Title from '../Title'
import PersonalDetails from './PersonalDetails'

const CheckoutForm = ({ onComplete }) => {
  async function CreateOrder({ order, onComplete, dispatch }) {
    const newOrder = await fetch('http://localhost:3001/orders/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'gbp',
        items: order.items.map($ => {
          return {
            type: 'sku',
            parent: $.id,
          }
        }),
        shipping: order.shipping,
        email: order.email,
      }),
    })

    dispatch({ type: 'Order:Update', payload: { id: newOrder.id } })

    onComplete()
  }

  // const [{ order, user }, dispatch] = useStateValue()

  const [cards, setCards] = useState()

  const findCards = (user, setcards) => {
    Api.Stripe({
      type: 'customers',
      func: 'listCards',
      id: user.stripeId,
    }).then($ => setcards($.data))
  }

  useEffect(() => {
    // user && findCards(user, setCards)
  }, [])

  return (
    <Checkout>
      <Title title={'Personal Details'} />
      <PersonalDetails />

      <Title title={'Shipping Details'} />
      <Address />

      <Title title={'Enter Payment'} />
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
      <Primary
      // onClick={() => CreateOrder({ user, order, onComplete, dispatch })}
      >
        Make Payment
      </Primary>
    </Checkout>
  )
}

export default injectStripe(CheckoutForm)
