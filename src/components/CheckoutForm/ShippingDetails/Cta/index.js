import React from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'

import { Primary } from '../../../Button'

import { CREATE_ORDER } from '../../../../services/Apollo/Mutations/order'
import { GET_ORDER } from '../../../../services/Apollo/Queries/order'

export default ({ onComplete }) => {
  const { data, loading } = useQuery(GET_ORDER)

  if (loading) return <div>Loading...</div>

  const { orderid, ...objectToSend } = data.Order

  const createOrder = useMutation(CREATE_ORDER, {
    variables: {
      Order: { ...objectToSend },
    },
    update: async (cache, { data: { CreateOrder } }) => {
      const { Order } = cache.readQuery({ query: GET_ORDER })

      console.log('Writing >>>>', Order, CreateOrder.id)

      await cache.writeData({
        data: {
          Order: {
            ...Order,
            orderid: CreateOrder.id,
            __typename: 'Order',
          },
        },
      })
      onComplete()
    },
  })

  return <Primary onClick={() => createOrder()}>Select Address</Primary>
}
