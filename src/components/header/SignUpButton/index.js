import React from 'react'
import { Primary, Tertiary } from '../../Button'

import idx from 'idx'

import { useQuery, useMutation } from 'react-apollo-hooks'
import { SUBSCRIBE_USER } from '../../../services/Apollo/Queries/auth'

import { LOGOUT } from '../../../services/Apollo/Mutations/users'

import auth from '../../../services/Auth'

export default () => {
  const logoutTask = useMutation(LOGOUT, {
    refetchQueries: [{ query: SUBSCRIBE_USER }],
  })

  const { loading, data } = useQuery(SUBSCRIBE_USER)

  if (loading) return <div>here!</div>

  const Logout = () => logoutTask()

  const isGuest = idx(data, $ => $.CurrentUser.isGuest)

  return isGuest ? (
    <Primary onClick={() => auth.login()}>Sign Up</Primary>
  ) : (
    <Tertiary onClick={() => Logout()}>Log Out</Tertiary>
  )
}
