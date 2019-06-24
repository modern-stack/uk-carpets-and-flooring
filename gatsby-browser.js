import './src/styles/global.css'

import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'

import { StripeProvider } from 'react-stripe-elements'

import client from './src/services/Apollo'

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <StripeProvider apiKey="pk_test_j8D2dhgBhWY1ToEZm9NsrF48">
        {element}
      </StripeProvider>
    </ApolloProvider>
  )
}
