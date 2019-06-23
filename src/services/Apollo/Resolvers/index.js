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

      console.log('data >>>', data)
      return null
    },
    updateAddress: async (_, { Order, address }, { cache, getCacheKey }) => {
      console.log('>>>>', Order, address)
      const shipping = {
        ...Order.shipping,
        address: address ? { __typename: 'StripeAddress', ...address } : null,
      }

      await cache.writeData({
        data: {
          Order: {
            ...Order,
            shipping,
            __typename: 'Order',
          },
        },
      })
      return null
    },
    updatePersonalDetails: async (_, { Order, ...props }, { cache }) => {
      const shipping = {
        ...Order.shipping,
        props,
      }

      await cache.writeData({
        data: {
          Order: {
            ...Order,
            shipping,
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
