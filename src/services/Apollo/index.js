import ApolloClient from 'apollo-client'

// import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from 'apollo-link-ws'
import { HttpLink } from 'apollo-link-http'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import WebSocket from 'isomorphic-ws'
import fetch from 'isomorphic-fetch'

import { ApolloLink, from } from 'apollo-link'

import { resolvers, typeDefs } from './Resolvers'

import { persistCache } from 'apollo-cache-persist'

const httpLink = new HttpLink({
  ssrMode: true,
  uri: process.env.GATSBY_GRAPHQL_ENDPOINT, // use https for secure endpoint
  credentials: 'include',
})

const wsLink = process.browser
  ? new WebSocketLink({
      uri: process.env.GATSBY_GRAPHQL_SUBSCRIPTION_ENDPOINT,
      options: {
        reconnect: true,
      },
    })
  : null

const link = process.browser
  ? split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      httpLink
    )
  : httpLink

const cache = new InMemoryCache()

if (typeof window !== 'undefined') {
  persistCache({
    cache,
    storage: window.localStorage,
  })
}

const defaults = {
  IsLoggedIn: false,
  Order: {
    __typename: 'Order',
    email: '',
    items: [],
    shipping: {
      __typename: 'shipping',
      name: 'example',
      address: {
        __typename: 'address',
        line1: '',
        line2: '',
        city: '',
        state: '',
        country: '',
        postal_code: '',
      },
    },
  },

  cartItems: [],
}

const middleWareLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    const omitTypename = (key, value) =>
      key === '__typename' ? undefined : value
    // eslint-disable-next-line no-param-reassign
    operation.variables = JSON.parse(
      JSON.stringify(operation.variables),
      omitTypename
    )
  }
  return forward(operation)
})

const client = new ApolloClient({
  fetch,
  cache,
  connectToDevTools: true,
  link: from([middleWareLink, link]),
  resolvers,
  typeDefs,
  defaults,
  addTypename: false,
})

cache.writeData({
  data: defaults,
})

export default client
