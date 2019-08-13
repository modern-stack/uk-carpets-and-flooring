import React from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { Address } from './styled'

import PostCodeSearch from './PostCodeSearch'
import ManualSearch from './ManualSearch'
import Completed from './Completed'

import { GET_ADDRESS_CONFIRMED } from '../../../services/Apollo/Queries/order'
import { TOGGLE_CONFIRMED_ADDRESS } from '../../../services/Apollo/Mutations/order'

export default ({ order, useManual, update, register }) => {
  const { email, shipping } = order
  const { data } = useQuery(GET_ADDRESS_CONFIRMED)
  const ToggleConfirmedAddress = useMutation(TOGGLE_CONFIRMED_ADDRESS)

  if (data.ConfirmedAddress) return <Completed order={order} />

  return (
    <Address>
      <input
        type={'text'}
        placeholder={'Name'}
        value={shipping.name}
        onChange={e =>
          update({
            shipping: { ...order.shipping, name: e.target.value },
          })
        }
        defaultValue={shipping.name}
      />

      <input
        type={'text'}
        placeholder={'Please enter an Email address'}
        value={email}
        onChange={e => update({ email: e.target.value })}
        defaultValue={email}
      />

      {useManual ? (
        <ManualSearch
          shipping={order.shipping}
          update={update}
          confirm={ToggleConfirmedAddress}
        />
      ) : (
        <PostCodeSearch
          shipping={order.shipping}
          update={update}
          confirm={ToggleConfirmedAddress}
        />
      )}
    </Address>
  )
}
