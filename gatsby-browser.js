import './src/styles/global.css'

import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'

import { StripeProvider } from 'react-stripe-elements'

import client from './src/services/Apollo'

// var script = document.createElement('script')
// script.type = 'text/javascript'
// script.src = 'https://js.stripe.com/v3/'
// document.body.appendChild(script)
// script.onload = function() {
//   Stripe.setPublishableKey('pk_test_j8D2dhgBhWY1ToEZm9NsrF48')
//   // do stuff
// }

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {/* <StripeProvider apiKey="pk_test_j8D2dhgBhWY1ToEZm9NsrF48"> */}
      {element}
      {/* </StripeProvider> */}
    </ApolloProvider>
  )
}
