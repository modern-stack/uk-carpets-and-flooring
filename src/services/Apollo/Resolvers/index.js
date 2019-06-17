import gql from 'graphql-tag'
import { GET_ORDER } from '../Queries/order'

export const typeDefs = gql`
  extend type Query {
    IsLoggedIn: [Bool]
    Order: Order!
  }

  extend type Mutation {
    addItem(Item: StripeItem! })
  }
`

export const resolvers = {
  Query: {},
  Mutation: {
    addItem: async (_, { item }, { cache, getCacheKey }) => {
      console.log('here!')
      await cache.writeData({ data: { item } })
      return null
    },
  },
}
