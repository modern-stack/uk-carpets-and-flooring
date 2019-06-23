import React from 'react'
import { injectStripe } from 'react-stripe-elements'

import { useQuery, useMutation } from 'react-apollo-hooks'

import { GET_ORDER } from '../../../services/Apollo/Queries/order'
import { COMPLETE_ORDER } from '../../../services/Apollo/Mutations/order'

import { Checkout } from './styled'
import { Primary } from '../../Button'

const CheckoutForm = ({ onComplete }) => {
  const { data, loading } = useQuery(GET_ORDER)
  const completeOrder = useMutation(COMPLETE_ORDER, {
    variables: {
      Order: data.Order,
    },
    onUpdate: () => onComplete(),
  })

  return (
    <Checkout>
      {/* <Title title={'Personal Details'} />
      <PersonalDetails />

      <Title title={'Shipping Details'} />
      <Address />

      <Primary onClick={() => onComplete} /> */}
    </Checkout>
  )
}

export default injectStripe(CheckoutForm)
