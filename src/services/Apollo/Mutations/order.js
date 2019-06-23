import gql from 'graphql-tag'

const ADD_TO_ORDER = gql`
  mutation addItem($Order: Order, $item: StripeItem!) {
    addItem(Order: $Order, item: $item) @client
  }
`

const UPDATE_ADDRESS = gql`
  mutation updateAddress($Order: Order, $address: StripeAddress!) {
    updateAddress(Order: $Order, address: $address) @client
  }
`

const CREATE_ORDER = gql`
  mutation CreateOrder($Order: OrderInput!) {
    CreateOrder(Order: $Order) {
      id
      items {
        id
      }
    }
  }
`

const COMPLETE_ORDER = gql`
  mutation updateAddress($Order: Order, $shipping: shipping!) {
    updateOrder(Order: $Order, shipping: $shipping) @client
  }
`

export { UPDATE_ADDRESS, ADD_TO_ORDER, CREATE_ORDER, COMPLETE_ORDER }
