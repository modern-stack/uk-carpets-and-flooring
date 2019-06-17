import React from 'react'
import { Primary } from '../../../components/Button'
import { useMutation } from 'react-apollo-hooks'

import { CREATE_ORDER } from '../../../services/Apollo/Mutations/order'
import { GET_ORDER } from '../../../services/Apollo/Queries/order'

export default ({ Id }) => {
  console.log('Id >>>>>', Id)
  const AddToOrder = useMutation(CREATE_ORDER, {
    variables: { Id },
    refetchQueries: [{ query: GET_ORDER }],
  })

  return (
    <Primary onClick={() => AddToOrder()}>
      <label>Add to Order</label>
    </Primary>
  )
}
