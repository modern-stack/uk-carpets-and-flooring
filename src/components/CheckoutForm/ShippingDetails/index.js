import React from 'react'
import { Address } from './styled'

import PostCodeSearch from './PostCodeSearch'
import ManualSearch from './ManualSearch'

export default ({ order, useManual, update }) => {
  const { email, shipping } = order

  return (
    <Address>
      <input
        type={'text'}
        placeholder={'Name'}
        value={shipping.name}
        onChange={e =>
          update({
            ...order,
            shipping: { ...order.shipping, name: e.target.value },
          })
        }
        defaultValue={shipping.name}
      />

      <input
        type={'text'}
        placeholder={'Please enter an Email address'}
        value={email}
        onChange={e => update({ ...order, email: e.target.value })}
        defaultValue={email}
      />

      {useManual ? (
        <ManualSearch order={order} update={update} />
      ) : (
        <PostCodeSearch order={order} update={update} />
      )}
    </Address>
  )
}
