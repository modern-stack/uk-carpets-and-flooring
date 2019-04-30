import React from 'react'

import { useStateValue } from '../Context'

export default () => {
  const [{ auth }, dispatch] = useStateValue()
  const test = auth.handleAuthentication()

  console.log('>>>>', test)
  return <div>Loading...</div>
}
