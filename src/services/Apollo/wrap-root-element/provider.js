import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'

import client from '../../Apollo'

export default ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
