import './src/styles/global.css'

import React from 'react'
import { ApolloProvider } from 'react-apollo'

import Page from './src/components/Page'
import clients from await './src/services/Apollo'

console.log('>>>', clients)

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={clients.HasuraClient}>
    <Page clients={clients}>{element}</Page>
  </ApolloProvider>
)
