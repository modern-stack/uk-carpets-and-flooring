import React from 'react'
import { Payment, PaymentDetails } from './styled'

import { useMutation, useQuery } from 'react-apollo-hooks'

import Address from './Address'
import PersonalDetails from './PersonalDetails'

import { Primary } from '../../Button'
import Title from '../../../components/Title'

import {
  CREATE_ORDER,
  UPDATE_ORDER,
} from '../../../services/Apollo/Mutations/order'

import { GET_ORDER } from '../../../services/Apollo/Queries/order'

export default ({ onComplete }) => {
  const { data, loading } = useQuery(GET_ORDER)

  if (loading) return <div>Loading...</div>

  const { orderid, ...objectToSend } = data.Order

  console.log('Sending >>>', objectToSend, data)

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
  return (
    <PaymentDetails>
      <Title title={'Personal Details'} />
      <PersonalDetails />

      <Title title={'Shipping Details'} />
      <Address />

      <Primary onClick={() => createOrder()}>Select Address</Primary>
    </PaymentDetails>
  )
}
