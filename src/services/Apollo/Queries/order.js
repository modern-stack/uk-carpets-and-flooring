import gql from 'graphql-tag'

export const GET_ORDER = gql`
  query GetOrder {
    Order @client {
      email
      items {
        parent
        currency
        description
      }
      shipping {
        name
        address {
          line1
          line2
          city
          country
          state
          postal_code
        }
      }
    }
  }
`

export const GET_ORDER_ITEMS = gql`
  query allSkus($Items: [String!]) {
    allSkus(id_in: $Items) {
      edges {
        node {
          _meta {
            id
          }
          name
          price
          featuredimage
          product {
            ... on Product {
              name
            }
          }
        }
      }
    }
  }
`

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`
