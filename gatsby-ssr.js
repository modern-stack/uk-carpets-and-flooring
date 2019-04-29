import React from 'react'
const { renderToString } = require('react-dom/server')

import { Context } from './src/Context'
import { client } from './src/Api'

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const App = () => {
    return (
      <ApolloProvider client={client}>
        <Context>{bodyComponent}</Context>
      </ApolloProvider>
    )
  }

  const body = renderToString(<App />)

  replaceBodyHTMLString(body)
}
