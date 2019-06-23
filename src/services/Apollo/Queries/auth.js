import gql from 'graphql-tag'

export const SUBSCRIBE_USER = gql`
  query {
    CurrentUser {
      given_name
      family_name
      picture
      isGuest
    }
  }
`

export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    IsLoggedIn @client
  }
`
