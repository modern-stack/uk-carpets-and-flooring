import React from 'react'
import { Primary } from '../../../components/Button'
import { useQuery, useMutation } from 'react-apollo-hooks'

import { ADD_TO_ORDER } from '../../../services/Apollo/Mutations/order'
import { GET_ORDER } from '../../../services/Apollo/Queries/order'

export default ({ Id }) => {
  const { data, loading } = useQuery(GET_ORDER)

  if (loading) return <div>Loading</div>

  const AddToOrder = useMutation(ADD_TO_ORDER, {
    variables: {
      Order: data.Order,
      item: {
        __typename: 'StripeItem',
        parent: Id,
        currency: 'gbp',
        description: 'test description',
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
