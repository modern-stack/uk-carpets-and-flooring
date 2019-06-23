import React from 'react'
import { Address, AddressDetails } from './styled'

import { useQuery, useMutation } from 'react-apollo-hooks'

import EditAddress from './Edit'
import { Secondary } from '../../../Button'

import { GET_ORDER } from '../../../../services/Apollo/Queries/order'
import { UPDATE_ADDRESS } from '../../../../services/Apollo/Mutations/order'

export default () => {
  const { data, loading } = useQuery(GET_ORDER)
  const resetAddress = useMutation(UPDATE_ADDRESS, {
    variables: {
      Order: data.Order,
      address: null,
    },
  })

  if (loading) return <div>loading</div>

  return (
    <Address>
      <EditAddress />
    </Address>
  )
}
