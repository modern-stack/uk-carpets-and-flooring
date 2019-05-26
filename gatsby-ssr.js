import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
const { renderToString } = require('react-dom/server')

import client from './src/services/Apollo'

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const App = () => {
    return <ApolloProvider client={client}>{bodyComponent}</ApolloProvider>
  }

  const body = renderToString(<App />)

  replaceBodyHTMLString(body)
}
