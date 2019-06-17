import React from 'react'
import { Primary } from '../../../components/Button'
import { useMutation } from 'react-apollo-hooks'

import { UPDATE_ORDER } from '../../../services/Apollo/Mutations/order'
import { GET_ORDER } from '../../../services/Apollo/Queries/order'

export default ({ Id }) => {
  console.log('Id >>>>>', Id)
  const AddToOrder = useMutation(UPDATE_ORDER, {
    variables: { parent: Id, currency: 'gbp' },
    // refetchQueries: [{ query: GET_ORDER }],
  })

  return (
    <Primary
      onClick={() =>
        AddToOrder().then(({ loading, data, error }) => {
          console.log('heres >>>>', loading, data, error)
          return data
        })
      }
    >
      <label>Add to Order</label>
    </Primary>
  )
}
