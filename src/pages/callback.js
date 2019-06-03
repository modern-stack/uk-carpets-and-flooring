import React, { useEffect, useState } from 'react'
import { navigateTo } from 'gatsby-link'

import { useMutation } from 'react-apollo-hooks'
import { SIGNUP } from '../services/Apollo/Mutations/users'
import { GET_USER } from '../services/Apollo/Queries/auth'

export default () => {
  const [user, setUser] = useState({})
  useEffect(() => {}, [user])

  const token = window.location.hash.split('#access_token=')[1].split('&')[0]

  useMutation(SIGNUP, {
    variables: { token },
    refetchQueries: [GET_USER],
  })().then(({ data }) => {
    if (data) {
      navigateTo('/')
    }
  })

  return <div>Loading...</div>
}
