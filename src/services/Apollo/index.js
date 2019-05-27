import ApolloClient from 'apollo-client'

import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from 'apollo-link-ws'
import { HttpLink } from 'apollo-link-http'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'
import WebSocket from 'isomorphic-ws'
import fetch from 'isomorphic-fetch'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql', // use https for secure endpoint
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

const client = new ApolloClient({
  initialState: {},
  link,
  fetch,
  cache: new InMemoryCache(),
})

export default client
