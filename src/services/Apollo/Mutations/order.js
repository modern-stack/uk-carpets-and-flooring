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

const COMPLETE_ORDER = gql`
  mutation CompleteOrder($Order: OrderInput!, $source: String!) {
    CompleteOrder(Order: $Order, source: $source) {
      id
    }
  }
`

const TOGGLE_CONFIRMED_ADDRESS = gql`
  mutation ToggleConfirmedAddress($status: Boolean!) {
    ToggleConfirmedAddress(status: $status) @client
  }
`

export { UPDATE_ORDER, ADD_TO_ORDER, COMPLETE_ORDER, TOGGLE_CONFIRMED_ADDRESS }
