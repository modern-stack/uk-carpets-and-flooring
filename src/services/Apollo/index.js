import ApolloClient from 'apollo-client'

import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from 'apollo-link-ws'
import { HttpLink } from 'apollo-link-http'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'
import WebSocket from 'isomorphic-ws'
import fetch from 'isomorphic-fetch'

import { persistCache } from 'apollo-cache-persist'

const httpLink = new HttpLink({
  ssrMode: true,
  uri: 'http://localhost:4000/graphql', // use https for secure endpoint
  credentials: 'include',
})

const wsLink = process.browser
  ? new WebSocketLink({
      uri: `ws://localhost:4000/graphql`,
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
  //   persistCache({
  //     cache,
  //     storage: window.localStorage,
  //   })
}

const client = new ApolloClient({
  link,
  fetch,
  cache,
})

export default client
