import React, { useEffect } from 'react'
import { Profile, ProfileImage } from './styled'
import { Spinner } from '../Loaders'

import { useQuery } from 'react-apollo-hooks'
import { SUBSCRIBE_USER } from '../../services/Apollo/Queries/auth'

export default () => {
  const { loading, error, data } = useQuery(SUBSCRIBE_USER)

  if (loading || !data || !data.CurrentUser)
    return (
      <Profile>
        <Spinner />
        <label>Loading Profile</label>
      </Profile>
    )

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
