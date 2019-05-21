import React from 'react'
import { Address, AddressDetails } from './styled'

import EditAddress from './Edit'
import { Secondary } from '../../Button'
import { useStateValue } from '../../../Context'

export default () => {
  const [{ order }, dispatch] = useStateValue()

  return (
    <Address>
      {order.shipping && order.shipping.address && (
        <AddressDetails>
          <div>
            {order.shipping.address.line1} {order.shipping.address.line2}
          </div>

          <div>{order.shipping.address.state}</div>
          <div>{order.shipping.address.city}</div>
          <div>{order.shipping.address.country}</div>
          <div>{order.shipping.address.post_code}</div>

          <br />
          <Secondary
            onClick={() =>
              dispatch({
                type: 'Order:ClearShipping',
                payload: null,
              })
            }
          >
            Edit Address
          </Secondary>
        </AddressDetails>
      )}

      {(!order.shipping || !order.shipping.address) && <EditAddress />}
    </Address>
  )
}
