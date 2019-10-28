//export { wrapRootElement } from './src/services/Apollo/wrap-root-element'

import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
const { renderToString } = require('react-dom/server')

import client from './src/services/Apollo'

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <ApolloProvider client={client}>{bodyComponent}</ApolloProvider>
  )

  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
