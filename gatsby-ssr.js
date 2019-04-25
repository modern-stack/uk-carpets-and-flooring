import React from 'react'
const { renderToString } = require('react-dom/server')

import { Context } from './src/Context'

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const App = () => {
    return <Context>{bodyComponent}</Context>
  }

  const body = renderToString(<App />)

  replaceBodyHTMLString(body)
}
