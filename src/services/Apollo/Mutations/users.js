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

export { SIGNUP, GUEST_SIGNUP, LOGOUT }
