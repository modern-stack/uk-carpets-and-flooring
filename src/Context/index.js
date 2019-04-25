import React, { createContext, useContext, useReducer } from 'react'

import reducer from './reducer'
const initialState = { basket: [], user: [] }

export const StateContext = createContext({})

export const useStateValue = () => useContext(StateContext)

export const Context = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer(), initialState)}>
    {children}
  </StateContext.Provider>
)
