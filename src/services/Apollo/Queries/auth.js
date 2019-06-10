import gql from 'graphql-tag'

const SUBSCRIBE_USER = gql`
  query {
    CurrentUser {
      given_name
      picture
      isGuest
    }
  }
`

export { SUBSCRIBE_USER }
