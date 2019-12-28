import React from 'react'
import useFirebase from '../../Hooks/Firebase/useFirebase'

import ProfileImage from '../ProfileImage'
import { Profile } from './styled'

export default () => {
  const { loading, authUser } = useFirebase()

  console.log('authUser >>>>', loading, authUser)

  if (loading) return <div>Loading...</div>

  return (
    <Profile>
      <ProfileImage />

      {!authUser && <label>Hi, Guest</label>}
      {authUser && <label>Hi, {authUser.displayName.split(' ')[0]}</label>}
    </Profile>
  )
}
