import React from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { Payment, PaymentDetails } from './styled'

import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from '../CompleteOrder/checkoutForm'

import Title from '../../Title'

import { GET_ORDER } from '../../../services/Apollo/Queries/order'

export default ({ onComplete }) => {
  const { data, loading } = useQuery(GET_ORDER)

  console.log('Ready >>>', data)

  return (
    <Payment>
      <Title title={'Personal Details'} />
      <PaymentDetails>
        <Elements>
          <CheckoutForm onComplete={onComplete} orderid={data.Order.orderid} />
        </Elements>
      </PaymentDetails>
    </Payment>
  )
}
