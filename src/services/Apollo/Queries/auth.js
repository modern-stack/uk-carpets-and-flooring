import gql from 'graphql-tag'

const GET_USER = gql`
  {
    me {
      username
      picture
    }
  }
`

export { GET_USER }
