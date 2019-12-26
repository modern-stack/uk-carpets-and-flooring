import React from 'react'
import SignInForm from './SignInForm'

import Divider from '../../../Divider'
import GoogleSignIn from './GoogleSignIn'

import { Information, Login, Container } from './styled'

export default () => {
  return (
    <Container>
      <Information />
      <Login>
        <h1>Uk Carpets</h1>
        <h3>Welcome to Uk Carpets and Flooring</h3>

        <SignInForm />

        <Divider text={'or'} />

        <div>
          <GoogleSignIn />
        </div>

        <div>
          New to Uk Carpets? <a>Create Account</a>
        </div>
      </Login>
    </Container>
  )
}
