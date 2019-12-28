import React from 'react'
import SignInForm from './SignInForm'

import Divider from '../../../Divider'
import GoogleSignIn from './GoogleSignIn'

import {
  Information,
  Login,
  CreateAccount,
  Title,
  SubTitle,
  Container,
} from './styled'

export default () => {
  return (
    <Container>
      <Information>Put something here</Information>

      <Login>
        <div>
          <Title>Uk Carpets</Title>
          <SubTitle>Welcome to Uk Carpets and Flooring</SubTitle>
        </div>

        <SignInForm />

        <Divider text={'or'} />

        <GoogleSignIn />

        <CreateAccount>
          New to Uk Carpets? <a>Create Account</a>
        </CreateAccount>
      </Login>
      <div />
    </Container>
  )
}
