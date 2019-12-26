import React from 'react'
import useFirebase from '../../Hooks/Firebase/useFirebase'

import ProfileImage from '../ProfileImage'

import { Profile } from './styled'

export default () => {
  const { auth, loading, authUser } = useFirebase()

  if (loading) return <div>Loading...</div>

  console.log('auth >>>>', authUser)

  if (!authUser) return <div>Please sign in</div>

  const { photoURL, displayName } = authUser

  return (
    <Profile>
      <ProfileImage src={photoURL || ''} />

      <label>Hi, {displayName}</label>
    </Profile>
  )
}
