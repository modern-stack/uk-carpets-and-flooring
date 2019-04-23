import React, { useState } from 'react'
import Api from '../../Api'

const SiteContext = React.createContext()

export default ({ children }) => {
  const [order, setOrder] = useState({
    items: [],
  })

  const updateOrder = $ => {
    console.log('Stripe >>>', Api)
    return Api.stripe('orders', 'upsert', $).then($ => setOrder($))
  }

  return (
    <SiteContext.Provider value={{ order, updateOrder }}>
      {children}
    </SiteContext.Provider>
  )
}

export const SiteConsumer = SiteContext.Consumer
