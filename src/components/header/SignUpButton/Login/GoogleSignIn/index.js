import React from 'react'
import useFirebase from '../../../../../Hooks/Firebase/useFirebase'

import { LoginButtons, SocialButton, Facebook, Google } from './styled'

export default () => {
  const { instance, auth, loading } = useFirebase()

  if (loading) return <div>Loading...</div>

  const signInGoogle = () => {
    instance.auth().signInWithRedirect(new auth.GoogleAuthProvider())
  }

  const signInFacebook = () => {
    instance
      .auth()
      .signInWithRedirect(new auth.FacebookAuthProvider())
      .then(function(result) {
        debugger
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        // ...
      })
      .catch(function(error) {
        debugger
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
  }

  return (
    <LoginButtons>
      <SocialButton
        background={'#D9534F'}
        size={2}
        onClick={() => signInGoogle()}
      >
        <Google /> <div class="text">Google</div>
      </SocialButton>
      <SocialButton
        background={'#337AB7'}
        size={2}
        onClick={() => signInFacebook()}
      >
        <Facebook /> <div class="text">Facebook</div>
      </SocialButton>
    </LoginButtons>
  )
}
