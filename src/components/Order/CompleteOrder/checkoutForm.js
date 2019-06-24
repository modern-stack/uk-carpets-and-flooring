import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

import { useQuery, useMutation } from 'react-apollo-hooks'

import { GET_ORDER } from '../../../services/Apollo/Queries/order'
import { COMPLETE_ORDER } from '../../../services/Apollo/Mutations/order'

import { Checkout } from './styled'
import { Primary } from '../../Button'
import { Title } from '../../Title'

const CheckoutForm = ({ onComplete }) => {
  const { data, loading } = useQuery(GET_ORDER)
  const completeOrder = useMutation(COMPLETE_ORDER, {
    variables: {
      Order: data.Order,
    },
    // update: () => onComplete(),
  })

  return (
    <Checkout>
      <div>here!</div>
      {/* <Title title={'Personal Details'} /> */}
      {/* <CardElement
        style={{
          base: {
            iconColor: '#c4f0ff',
            color: 'black',
            border: '1px solid red',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
          },
        }}
      /> */}
      {/* <Primary onClick={() => completeOrder} /> */}
    </Checkout>
  )
}

// export default injectStripe(CheckoutForm)

export default CheckoutForm
