import React from 'react'

import ProfileImage from '../ProfileImage'

import { useQuery } from 'react-apollo-hooks'
import { SUBSCRIBE_USER } from '../../services/Apollo/Queries/auth'

import { Profile } from './styled'

export default () => {
  const { loading, data } = useQuery(SUBSCRIBE_USER)
  if (loading || !data || !data.CurrentUser) return null

  const { given_name, picture } = data.CurrentUser

  return (
    <Profile>
      <ProfileImage src={picture} />

      <label>Hi, {given_name}</label>
    </Profile>
  )
}
