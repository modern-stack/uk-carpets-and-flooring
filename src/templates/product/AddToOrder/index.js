import React from 'react'
import { Primary } from '../../../components/Button'
import { useQuery, useMutation } from 'react-apollo-hooks'

import { UPDATE_ORDER } from '../../../services/Apollo/Mutations/order'
import { GET_ORDER } from '../../../services/Apollo/Queries/order'

export default ({ Id }) => {
  const { data, loading } = useQuery(GET_ORDER)

  if (loading) return <div>Loading</div>

  console.log('Loaded order >>>>', data.Order)

  const AddToOrder = useMutation(UPDATE_ORDER, {
    variables: {
      Order: data.Order,
      Item: {
        __typename: 'StripeItem',
        id: Id,
        parent: Id,
        currency: 'gbp',
        description: '',
      },
    },
    refetchQueries: [{ query: GET_ORDER }],
  })

  return (
    <Primary onClick={() => AddToOrder()}>
      <label>Add to Order</label>
    </Primary>
  )
}
