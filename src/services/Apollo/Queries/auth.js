import gql from 'graphql-tag'

const GET_USER = gql`
  query findUser {
    user_id @client
  }
`

export { GET_USER }
