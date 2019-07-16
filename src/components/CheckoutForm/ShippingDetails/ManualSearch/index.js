import React, { useState, useEffect } from 'react'

import { ManualSearch } from './styled'

export default ({ order, update }) => {
  const [address, setAddress] = useState(order.shipping.address)

  useEffect(() => {
    update({ ...order, shipping: { ...order.shipping, address } })
  })

  return (
    <ManualSearch>
      <input
        type={'text'}
        placeholder={'Street Address'}
        onChange={$ => {
          setAddress({ line1: $.target.value })
        }}
        defaultValue={address.line1}
      />
      <input
        type={'text'}
        placeholder={'Locality'}
        onChange={$ => setAddress({ line2: $.target.value })}
        defaultValue={address.line2}
      />
      <input
        type={'text'}
        placeholder={'Town or City'}
        onChange={$ => setAddress({ city: $.target.value })}
        defaultValue={address.city}
      />

      <input
        type={'text'}
        placeholder={'State'}
        onChange={$ => setAddress({ state: $.target.value })}
        defaultValue={address.state}
      />
      <input
        type={'text'}
        placeholder={'Country'}
        onChange={$ => setAddress({ country: $.target.value })}
        defaultValue={address.country}
      />
      <input
        type={'text'}
        placeholder={'Postcode'}
        onChange={$ => setAddress({ postal_code: $.target.value })}
        defaultValue={address.postal_code}
      />
      <hr />
    </ManualSearch>
  )
}
