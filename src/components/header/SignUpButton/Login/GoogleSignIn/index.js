import React from 'react'
import useFirebase from '../../../../../Hooks/Firebase/useFirebase'

export default () => {
  const { instance, auth, loading } = useFirebase()

  if (loading) return <div>Loading...</div>

  const signIn = () => {
    instance.auth().signInWithRedirect(new auth.GoogleAuthProvider())
  }

  return (
    <div>
      <button onClick={() => signIn()}>Sign In with Google</button>
    </div>
  )
}
