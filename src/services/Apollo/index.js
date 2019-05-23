import Setup from './setupClient'
import auth from '../../services/Auth'

export default (async () => {
  const HasuraClient = await Setup({
    uri: 'https://uk-carpets-and-flooring.herokuapp.com/v1/graphql',
    defaults: {},
  })

  const PrismicClient = await Setup({
    uri: 'https://uk-carpets-and-flooring.prismic.io/graphql',
    defaults: {},
  })

  console.log(HasuraClient, PrismicClient)

  return {
    HasuraClient,
    PrismicClient,
  }
})()

// const User = {
//   ...auth.getUser(),
//   stripeId: auth.getUser()['https://ukcarpetsandflooring/stripe_customer_id'],
// }
