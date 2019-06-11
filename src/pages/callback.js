import React, { useEffect, useState } from 'react'
import { navigateTo } from 'gatsby-link'

import Layout from '../components/layout'

import { useMutation } from 'react-apollo-hooks'
import { SUBSCRIBE_USER } from '../services/Apollo/Queries/auth'
import { SIGNUP } from '../services/Apollo/Mutations/users'

export default props => {
  console.log(props)
  const token = props.location.hash.split('#access_token=')[1].split('&')[0]

  useMutation(SIGNUP, {
    variables: { token },
    refetchQueries: [{ query: SUBSCRIBE_USER }],
  })()

  navigateTo('/')

  return null
}
