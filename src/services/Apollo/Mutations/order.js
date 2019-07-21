import gql from 'graphql-tag'

const ADD_TO_ORDER = gql`
  mutation addItem($Order: Order, $item: StripeItem!) {
    addItem(Order: $Order, item: $item) @client
  }
`

const UPDATE_ORDER = gql`
  mutation updateOrder($toUpdate: Order!) {
    updateOrder(toUpdate: $toUpdate) @client
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
  mutation CompleteOrder($orderid: String!, $source: String!) {
    CompleteOrder(orderid: $orderid, source: $source) {
      id
    }
  }
`

export { UPDATE_ORDER, ADD_TO_ORDER, CREATE_ORDER, COMPLETE_ORDER }
