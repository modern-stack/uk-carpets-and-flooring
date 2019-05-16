import './src/styles/global.css'

import React from 'react'
import { ApolloProvider } from 'react-apollo'

import { Context } from './src/Context'
import { client } from './src/Api'
import auth from './src/services/Auth'

const getFromLocalStorage = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key)) || defaultValue
  }
  return defaultValue
}

const currentUser = auth.getUser()

const stripeId = currentUser
  ? currentUser['https://ukcarpetsandflooring/stripe_customer_id']
  : null

const initialState = {
  order: getFromLocalStorage('Order', {
    customer: stripeId,
    items: [],
    name: currentUser
      ? `${currentUser.given_name} ${currentUser.family_name}`
      : '',
    email: currentUser ? currentUser.email : '',
  }),
  user: currentUser ? { ...currentUser, stripeId } : null,
  auth,
}

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <Context initialState={initialState}>{element}</Context>
  </ApolloProvider>
)
