import React from 'react'
import { SignInForm } from './styles'

import { Primary } from '../../../../Button'

export default () => (
  <SignInForm>
    <div class="form-item">
      <label>Username</label>
      <input />
    </div>

    <div class="form-item">
      <label>Password</label>
      <input />
      <label class={'forgotten'}>Forgot Password?</label>
    </div>

    <Primary width="50%" rounded>
      Sign In
    </Primary>
  </SignInForm>
)
