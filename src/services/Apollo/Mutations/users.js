import gql from 'graphql-tag'

// const UPSERT_USER = gql`
//   mutation {
//     signup
//   }
// `

const SIGNUP = gql`
  mutation signup($token: String!) {
    signup(token: $token)
  }
`

export { SIGNUP }
