import React from 'react'

import { useQuery } from 'react-apollo-hooks'
import { SUBSCRIBE_USER } from '../../services/Apollo/Queries/auth'

import { Profile, ProfileImage } from './styled'

export default () => {
  const { loading, error, data } = useQuery(SUBSCRIBE_USER)

  const { given_name, picture } = data.CurrentUser

  return (
    <Profile>
      <ProfileImage
        src={picture || 'http://aux.iconspalace.com/uploads/guest-icon-256.png'}
      />

      <label>Hi, {given_name}</label>
    </Profile>
  )
}
