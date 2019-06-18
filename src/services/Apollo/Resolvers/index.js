import gql from 'graphql-tag'
import { GET_ORDER } from '../Queries/order'

export const typeDefs = gql`
  extend type Query {
    IsLoggedIn: Bool
    order: Order!
  }

  extend type Mutation {
    addItem(order: Order!, item: StripeItem!): Order
    IsLoggedIn(status: Bool!): Bool
  }
`

export const resolvers = {
  Query: {},
  Mutation: {
    addItem: async (_, { Order, Item }, { cache, getCacheKey }) => {
      console.log('>>>>', Order, Item)
      await cache.writeData({
        data: {
          Order: {
            ...Order,
            Items: [...Order.Items, Item],
            __typename: 'Order',
          },
        },
      })
      return null
    },
    ToggleLoggedIn: async (_, { Status }, { cache, getCacheKey }) => {
      console.log('Toggling >>>>', Status)
      await cache.writeData({
        data: {
          IsLoggedIn: Status,
        },
      })
      return null
    },
  },
}
