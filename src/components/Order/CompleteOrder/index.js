import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { Payment, PaymentDetails } from './styled'

import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from '../CompleteOrder/checkoutForm'

import Title from '../../Title'

import { GET_ORDER } from '../../../services/Apollo/Queries/order'

import loadStripe from './loadStripe'

export default ({ onComplete }) => {
  const { data, loading } = useQuery(GET_ORDER)

  const [stripeLoaded, setStripeLoaded] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const result = await loadStripe('https://js.stripe.com/v3/')
      setStripeLoaded(result)
    }
    fetchData()
  }, [])

  if (!stripeLoaded.successful) return <div>Loading</div>

  console.log('Ready >>>', data)

  return (
    <StripeProvider apiKey={'pk_test_j8D2dhgBhWY1ToEZm9NsrF48'}>
      <Payment>
        <Title title={'Personal Details'} />
        <PaymentDetails>
          <Elements>
            <CheckoutForm
              onComplete={onComplete}
              orderid={data.Order.orderid}
            />
          </Elements>
        </PaymentDetails>
      </Payment>
    </StripeProvider>
  )
}
