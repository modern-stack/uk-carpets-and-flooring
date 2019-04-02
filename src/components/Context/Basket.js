import React, { useState } from 'react'

const BasketContext = React.createContext()

export default ({ children }) => {
  const [basket, setBasket] = useState([])

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  )
}

export const BasketConsumer = BasketContext.Consumer
