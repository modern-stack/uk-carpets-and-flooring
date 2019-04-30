import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
// import Firebase from '../services/firebase'

const getFromLocalStorage = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key)) || defaultValue
  }
  return defaultValue
}

const initialState = {
  basket: getFromLocalStorage('Basket', []),
  user: [],
  // auth: Firebase.auth,
}

export const StateContext = createContext({})

export const useStateValue = () => useContext(StateContext)

export const Context = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer(), initialState)}>
    {children}
  </StateContext.Provider>
)
