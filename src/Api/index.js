import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export default {
  Stripe: (type, func, $, method = 'POST') => {
    return fetch(`http://localhost:3001/${type}/${func}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify($),
    })
  },
}

export const client = new ApolloClient({
  uri: process.env.GATSBY_GRAPHQLCLIENT,
  fetch,
})
