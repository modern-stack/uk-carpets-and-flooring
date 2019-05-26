import ApolloClient from 'apollo-boost'
import auth from '../../services/Auth'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  fetch,
})

export default client

// const User = {
//   ...auth.getUser(),
//   stripeId: auth.getUser()['https://ukcarpetsandflooring/stripe_customer_id'],
// }
