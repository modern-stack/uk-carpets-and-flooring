import gql from 'graphql-tag'

const ALL_SKUS = gql`
  {
    allSkus {
      edges {
        node {
          name
        }
      }
    }
  }
`

export { ALL_SKUS }
