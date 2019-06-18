import React from 'react'

import Profile from './profile'
import { Spinner } from '../Loaders'

import { useQuery } from 'react-apollo-hooks'
import { IS_LOGGED_IN } from '../../services/Apollo/Queries/auth'

export default () => {
  const { loading, data } = useQuery(IS_LOGGED_IN)

  if (loading || !data || !data.IsLoggedIn) {
    return (
      <div>
        <Spinner />
        <label>Loading Profile</label>
      </div>
    )
  }

  return <Profile />
}
