import React from 'react'
import { Primary } from '../../../Button'
import { ManualSearch } from './styled'

import { Input, ErrorMessage } from '../../../Form'

export default ({ shipping, update, confirm, register, errors }) => {
  const { address } = shipping

  return (
    <ManualSearch>
      <Input
        name={'line1'}
        type={'text'}
        placeholder={'Street Address'}
        onBlur={$ => {
          update({
            shipping: {
              ...shipping,
              address: { ...address, line1: $.target.value },
            },
          })
        }}
        ref={register({ required: 'Please enter a Line 1 address' })}
        defaultValue={address.line1}
      />
      {errors.line1 && <ErrorMessage>{errors.line1.message}</ErrorMessage>}
      <input
        type={'text'}
        placeholder={'Locality'}
        onBlur={$ =>
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
        onBlur={$ =>
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
        onBlur={$ =>
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
        onBlur={$ =>
          update({
            shipping: {
              ...shipping,
              address: { ...address, country: $.target.value },
            },
          })
        }
        defaultValue={address.country}
      />
      <Input
        name={'postal_code'}
        type={'text'}
        placeholder={'Postcode'}
        ref={register({ required: 'Please enter a valid postcode' })}
        onBlur={$ =>
          update({
            shipping: {
              ...shipping,
              address: { ...address, postal_code: $.target.value },
            },
          })
        }
        defaultValue={address.postal_code}
      />
      {errors.postcode && (
        <ErrorMessage>{errors.postal_code.message}</ErrorMessage>
      )}
      <hr />

      <Primary
        disabled={
          !address.postal_code ||
          errors.postal_code ||
          !address.line1 ||
          errors.line1
        }
        onClick={() => confirm()}
      >
        Confirm
      </Primary>
    </ManualSearch>
  )
}
