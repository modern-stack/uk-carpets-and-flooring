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
    addItem: async (_, { Order, item }, { cache, getCacheKey }) => {
      const data = await cache.writeData({
        data: {
          Order: {
            ...Order,
            items: [...Order.items, item],
            __typename: 'Order',
          },
        },
      })

      return null
    },
    updateOrder: async (_, { toUpdate }, { cache, getCacheKey }) => {
      const Order = cache.readQuery({ query: GET_ORDER })
      await cache.writeData({
        data: {
          Order: {
            ...Order,
            ...toUpdate,
            __typename: 'Order',
          },
        },
      })
      return null
    },
    ToggleLoggedIn: async (_, { Status }, { cache, getCacheKey }) => {
      await cache.writeData({
        data: {
          IsLoggedIn: Status,
        },
      })
      return null
    },
  },
}
