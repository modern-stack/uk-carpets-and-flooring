import gql from 'graphql-tag'

export const GET_ORDER = gql`
  query GetOrder {
    Order @client {
      Items {
        id
        currency
        description
      }
    }
  }
`

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`
