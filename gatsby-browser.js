import './src/styles/global.css'

import React from 'react'
import { ApolloProvider } from 'react-apollo'

import { Context } from './src/Context'
import { client } from './src/Api'

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <Context>{element}</Context>
  </ApolloProvider>
)
