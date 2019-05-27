import gql from 'graphql-tag'

const SUBSCRIBE_USER = gql`
  subscription User_aggregate($id: uuid!) {
    User_aggregate(where: { Id: { _eq: $id } }) {
      nodes {
        Id
      }
    }
  }
`

export { SUBSCRIBE_USER }
