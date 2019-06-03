import gql from 'graphql-tag'

const SUBSCRIBE_USER = gql`
  {
    me {
      username
      picture
    }
  }
`

export { SUBSCRIBE_USER }
