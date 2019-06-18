import gql from 'graphql-tag'

const UPDATE_ORDER = gql`
  mutation addItem($Order: Order, $Item: StripeItem!) {
    addItem(Order: $Order, Item: $Item) @client
  }
`

export { UPDATE_ORDER }
