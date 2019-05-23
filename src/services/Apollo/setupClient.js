import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

import { resolvers, defaults } from './resolvers'

export default async function setupApollo({ uri }) {
  const cache = new InMemoryCache()

  const stateLink = withClientState({ resolvers, cache, defaults })

  // NOTE: This must go after the call to withClientState. Otherwise that will overwrite the
  //  cache with defaults.
  await persistCache({
    cache,
    storage: window ? window.sessionStorage : '',
    maxSize: false, // set to unlimited (default is 1MB https://github.com/apollographql/apollo-cache-persist)
    debug: true, // enables console logging
  })

  const httpLink = new HttpLink({
    uri,
  })

  const client = new ApolloClient({
    cache,
    link: ApolloLink.from([stateLink, httpLink]),
  })

  return client
}
