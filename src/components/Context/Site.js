import React, { useState } from 'react'

const SiteContext = React.createContext()

export default ({ children }) => {
  const [basket, setBasket] = useState([])

  return (
    <SiteContext.Provider value={{ basket, setBasket }}>
      {children}
    </SiteContext.Provider>
  )
}

export const SiteConsumer = SiteContext.Consumer
