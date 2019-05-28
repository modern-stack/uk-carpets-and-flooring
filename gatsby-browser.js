import './src/styles/global.css'

import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'

import client from './src/services/Apollo'
import Authentication from './src/components/Authentication'

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <Authentication client={client}>{element}</Authentication>
    </ApolloProvider>
  )
}
