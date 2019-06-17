import gql from 'graphql-tag'

export const GET_ORDER = gql`
  query GetOrder {
    localOrder @client
  }
`

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`

export const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`
