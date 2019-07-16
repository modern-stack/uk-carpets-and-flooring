import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'

import { Primary } from '../../../../../Button'
import { ManualSearch } from './styled'

import { UPDATE_ORDER } from '../../../../../../services/Apollo/Mutations/order'
import { GET_ORDER } from '../../../../../../services/Apollo/Queries/order'

export default () => {
  const { data } = useQuery(GET_ORDER)

  const [address, setAddress] = useState(
    data.Order.shipping.address || { __typename: 'StripeAddress' }
  )

  const updateOrder = useMutation(UPDATE_ORDER, {
    variables: {
      toUpdate: {
        shipping: {
          ...data.Order.shipping,
          address,
        },
      },
    },
    refetchQueries: [{ query: GET_ORDER }],
  })

  useEffect(() => {
    updateOrder()
  })

  return (
    <ManualSearch>
      <input
        type={'text'}
        placeholder={'Street Address'}
        onChange={$ => {
          setAddress({ ...address, line1: $.target.value })
        }}
        defaultValue={address.line1}
      />
      <input
        type={'text'}
        placeholder={'Locality'}
        onChange={$ => setAddress({ ...address, line2: $.target.value })}
        defaultValue={address.line2}
      />
      <input
        type={'text'}
        placeholder={'Town or City'}
        onChange={$ => setAddress({ ...address, city: $.target.value })}
        defaultValue={address.city}
      />

      <input
        type={'text'}
        placeholder={'State'}
        onChange={$ => setAddress({ ...address, state: $.target.value })}
        defaultValue={address.state}
      />
      <input
        type={'text'}
        placeholder={'Country'}
        onChange={$ => setAddress({ ...address, country: $.target.value })}
        defaultValue={address.country}
      />
      <input
        type={'text'}
        placeholder={'Postcode'}
        onChange={$ => setAddress({ ...address, postal_code: $.target.value })}
        defaultValue={address.postal_code}
      />
      <hr />
    </ManualSearch>
  )
}
