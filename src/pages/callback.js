import React, { useEffect, useState } from 'react'
import { navigateTo } from 'gatsby-link'

import { useMutation } from 'react-apollo-hooks'
import { SIGNUP } from '../services/Apollo/Mutations/users'

export default () => {
  const [user, setUser] = useState({})
  useEffect(() => {}, [user])

  const token = window.location.hash.split('#access_token=')[1].split('&')[0]

  useMutation(SIGNUP, {
    variables: { token },
  })().then(({ data }) => {
    if (data) {
      navigateTo('/')
    }
  })

  return <div>Loading...</div>
}
