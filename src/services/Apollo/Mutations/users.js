import gql from 'graphql-tag'

const GUEST_SIGNUP = gql`
  mutation Guest_Signup {
    Guest_Signup
  }
`

const LOGOUT = gql`
  mutation Logout {
    Logout
  }
`

const SIGNUP = gql`
  mutation signup($token: String!) {
    signup(token: $token)
  }
`

const TOGGLE_LOGGED_IN = gql`
  mutation ToggleLoggedIn($Status: Boolean!) {
    ToggleLoggedIn(Status: $Status) @client
  }
`

export { SIGNUP, GUEST_SIGNUP, LOGOUT, TOGGLE_LOGGED_IN }
