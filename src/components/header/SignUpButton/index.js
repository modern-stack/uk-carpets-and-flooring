import React, { useEffect, useState } from 'react'
import { Primary, Secondary } from '../../Button'
import { navigateTo } from 'gatsby-link'

import idx from 'idx'

import { useQuery, useMutation } from 'react-apollo-hooks'
import { SUBSCRIBE_USER } from '../../../services/Apollo/Queries/auth'

import { GUEST_SIGNUP, LOGOUT } from '../../../services/Apollo/Mutations/users'

import auth from '../../../services/Auth'

export default () => {
  const logoutTask = useMutation(LOGOUT, {
    refetchQueries: [{ query: SUBSCRIBE_USER }],
  })

  const { data } = useQuery(SUBSCRIBE_USER)

  const Logout = () => logoutTask()

  const isGuest = idx(data, $ => $.CurrentUser.isGuest)

  console.log('Data >>>>', data)

  return isGuest ? (
    <Primary onClick={() => auth.login()}>Sign Up</Primary>
  ) : (
    <Secondary onClick={() => Logout()}>Log Out</Secondary>
  )
}
