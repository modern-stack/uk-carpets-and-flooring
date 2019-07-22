import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Payment, PaymentDetails } from './styled'

import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './checkoutForm'

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

  return (
    <StripeProvider apiKey={'pk_test_j8D2dhgBhWY1ToEZm9NsrF48'}>
      <Payment>
        <PaymentDetails>
          <Elements>
            <CheckoutForm onComplete={onComplete} Order={data.Order} />
          </Elements>
        </PaymentDetails>
      </Payment>
    </StripeProvider>
  )
}
