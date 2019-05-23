import React from 'react'
import { ApolloProvider } from 'react-apollo'
const { renderToString } = require('react-dom/server')

import HasuraClient from './src/services/Apollo'

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const App = () => {
    return (
      <ApolloProvider client={HasuraClient}>{bodyComponent}</ApolloProvider>
    )
  }

  const body = renderToString(<App />)

  replaceBodyHTMLString(body)
}
