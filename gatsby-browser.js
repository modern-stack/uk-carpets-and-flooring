import './src/styles/global.css'

import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'

import client from './src/services/Apollo'
import { useMutation } from 'react-apollo-hooks'
import { UPDATE_USER } from './src/services/Apollo/Mutations/users'

import uuidv4 from 'uuid/v4'

import auth from './src/services/Auth'

export const wrapRootElement = ({ element }) => {
  const currentUser = auth.getUser()

  const { data, error, loading } = useMutation(UPDATE_USER, {
    variables: {
      id: currentUser ? currentUser.id : uuidv4(),
    },
  })

  console.log(data, error, loading)

  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
