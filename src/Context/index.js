import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

export const StateContext = createContext({})

export const useStateValue = () => useContext(StateContext)

export const Context = ({ children, initialState }) => (
  <StateContext.Provider value={useReducer(reducer(), initialState)}>
    {children}
  </StateContext.Provider>
)
