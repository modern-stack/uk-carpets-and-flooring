import React from 'react'

import { FaTruck, FaTasks } from 'react-icons/fa'

import { Orders, Order } from './styled'

function renderDelliveryStatus($) {
  return !!$.charge ? <FaTruck /> : <FaTasks />
}

export default ({ orders = [] }) => {
  return (
    <Orders>
      {orders.map($ => {
        const date = new Date(1561405188 * 1000)
        return (
          <Order>
            <div>{renderDelliveryStatus($)}</div>
            <div>{$.id.slice(0, 18)}</div>
            <div />
            <div>{date.toLocaleDateString()}</div>
            <div>View</div>
            <div>Refund</div>
            <div>Tracking</div>
            <hr />
          </Order>
        )
      })}
    </Orders>
  )
}
