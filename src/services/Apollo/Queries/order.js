import gql from 'graphql-tag'

const GET_ORDER = gql`
  {
    Order {
      OrderItems {
        edges {
          node {
            _meta {
              id
            }
          }
        }
      }
    }
  }
`

export { GET_ORDER }
