import React, { useState } from 'react'
import { Confirmation } from './styled'

import { Primary } from '../Button'

async function CompleteOrder({ onComplete, order }) {
  await fetch('http://localhost:3001/orders/create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      currency: 'gbp',
      quantity: 1,
      items: order.items.map($ => {
        return {
          type: 'sku',
          parent: $.id,
        }
      }),
    }),
  })

  onComplete()
}

export default ({ onComplete }) => (
  <Confirmation>
    <Primary onClick={() => CompleteOrder({ onComplete })}>
      Complete Order
    </Primary>
  </Confirmation>
)
