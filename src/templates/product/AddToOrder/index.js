import React from 'react'
import { Primary } from '../../../components/Button'
import { useQuery, useMutation } from 'react-apollo-hooks'

import { ADD_TO_ORDER } from '../../../services/Apollo/Mutations/order'
import { GET_ORDER } from '../../../services/Apollo/Queries/order'

export default ({ Id, quantity, description = '', amount }) => {
  const { data, loading } = useQuery(GET_ORDER)

  if (loading) return <div>Loading</div>

  console.log('Adding order >>>>', Id, quantity, description, amount)

  const AddToOrder = useMutation(ADD_TO_ORDER, {
    variables: {
      Order: data.Order,
      item: {
        __typename: 'StripeItem',
        parent: Id,
        currency: 'gbp',
        quantity,
        description,
        amount,
      },
    },
    refetchQueries: [{ query: GET_ORDER }],
  })

  return <Primary onClick={() => AddToOrder()}>Add to Order</Primary>
}
