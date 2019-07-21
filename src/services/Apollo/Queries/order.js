import gql from 'graphql-tag'

export const GET_ORDER = gql`
  query GetOrder {
    Order @client {
      orderid
      email
      items {
        parent
        currency
        description
        quantity
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

export const GET_ALL_ORDERS = gql`
  query {
    GetAllOrders {
      id
      charge
      created
      items {
        id
        description
        amount
      }
    }
  }
`
