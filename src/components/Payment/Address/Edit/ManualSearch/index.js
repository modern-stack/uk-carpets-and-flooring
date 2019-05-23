import React, { useState } from 'react'
import { Primary } from '../../../../Button'
import { ManualSearch } from './styled'

export default () => {
  const [address, setAddress] = useState({})

  const updateAddress = (field, value) => {
    setAddress({ ...address, [field]: value })
  }

  // const [{ order }, dispatch] = useStateValue()

  return (
    <ManualSearch>
      <input
        type={'text'}
        placeholder={'Street Address'}
        onChange={$ => updateAddress('line1', $.target.value)}
      />
      <input
        type={'text'}
        placeholder={'Loacilty'}
        onChange={$ => updateAddress('state', $.target.value)}
      />
      <input
        type={'text'}
        placeholder={'Town or City'}
        onChange={$ => updateAddress('city', $.target.value)}
      />

      <input
        type={'text'}
        placeholder={'Country'}
        onChange={$ => updateAddress('country', $.target.value)}
      />

      <input
        type={'text'}
        placeholder={'Postcode'}
        onChange={$ => updateAddress('post_code', $.target.value)}
      />
      <hr />
      <Primary
      // onClick={() =>
      //   dispatch({ type: 'Order:UpdateShipping', payload: { address } })
      // }
      >
        Select Address
      </Primary>
    </ManualSearch>
  )
}
