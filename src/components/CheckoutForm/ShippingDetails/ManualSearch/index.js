import React from 'react'
import { Primary } from '../../../Button'
import { ManualSearch } from './styled'

export default ({ shipping, update, confirm }) => {
  const { address } = shipping

  console.log('Shipping >>>', shipping)

  return (
    <ManualSearch>
      <input
        type={'text'}
        placeholder={'Street Address'}
        onChange={$ => {
          update({
            shipping: {
              ...shipping,
              address: { ...address, line1: $.target.value },
            },
          })
        }}
        defaultValue={address.line1}
      />
      <input
        type={'text'}
        placeholder={'Locality'}
        onChange={$ =>
          update({
            shipping: {
              ...shipping,
              address: { ...address, line2: $.target.value },
            },
          })
        }
        defaultValue={address.line2}
      />
      <input
        type={'text'}
        placeholder={'Town or City'}
        onChange={$ =>
          update({
            shipping: {
              ...shipping,
              address: { ...address, city: $.target.value },
            },
          })
        }
        defaultValue={address.city}
      />

      <input
        type={'text'}
        placeholder={'State'}
        onChange={$ =>
          update({
            shipping: {
              ...shipping,
              address: { ...address, state: $.target.value },
            },
          })
        }
        defaultValue={address.state}
      />
      <input
        type={'text'}
        placeholder={'Country'}
        onChange={$ =>
          update({
            shipping: {
              ...shipping,
              address: { ...address, country: $.target.value },
            },
          })
        }
        defaultValue={address.country}
      />
      <input
        type={'text'}
        placeholder={'Postcode'}
        onChange={$ =>
          update({
            shipping: {
              ...shipping,
              address: { ...address, postal_code: $.target.value },
            },
          })
        }
        defaultValue={address.postal_code}
      />
      <hr />

      <Primary onClick={() => confirm()}>Confirm</Primary>
    </ManualSearch>
  )
}
