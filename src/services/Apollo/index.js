import ApolloClient from 'apollo-client'

// import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from 'apollo-link-ws'
import { HttpLink } from 'apollo-link-http'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import WebSocket from 'isomorphic-ws'
import fetch from 'isomorphic-fetch'
import { ApolloLink } from 'apollo-link'

import { withClientState } from 'apollo-link-state'

import { persistCache } from 'apollo-cache-persist'
import typeDefs from './TypeDefs'

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

const stateLink = withClientState({
  cache,
  typeDefs,
  resolvers: {
    Mutation: {
      updateBasket: (_, { basket }, { cache }) => {
        cache.writeData({ data: { basket } })
        return null
      },
    },
  },
  defaults: {
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: true,
    },
  },
})

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, link]),
  fetch,
  cache,
})

export default client
