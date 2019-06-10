import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
const { renderToString } = require('react-dom/server')

import client from './src/services/Apollo'

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <ApolloProvider client={client}>
      <Authentication client={client}>{bodyComponent}</Authentication>
    </ApolloProvider>
  )

  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
