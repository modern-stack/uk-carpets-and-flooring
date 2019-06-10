import React, { useEffect } from 'react'
import { Profile, ProfileImage } from './styled'
import { FaSpinner } from 'react-icons/fa'

import { useQuery } from 'react-apollo-hooks'
import { SUBSCRIBE_USER } from '../../services/Apollo/Queries/auth'

export default () => {
  const { loading, error, data } = useQuery(SUBSCRIBE_USER)

  if (loading || !data || !data.CurrentUser)
    return (
      <Profile>
        <FaSpinner />
      </Profile>
    )

  const { given_name, picture } = data.CurrentUser

  console.log('Profile user >>>>>', data.CurrentUser)

  return (
    <Profile>
      {!loading && (
        <ProfileImage
          src={
            picture || 'http://aux.iconspalace.com/uploads/guest-icon-256.png'
          }
        />
      )}
      <label>{given_name}</label>
    </Profile>
  )
}
