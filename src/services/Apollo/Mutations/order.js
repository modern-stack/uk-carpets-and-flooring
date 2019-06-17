import gql from 'graphql-tag'

const UPDATE_ORDER = gql`
  mutation addItem($item: StripeItem!) {
    addItem(item: $item) @client
  }
`

export { UPDATE_ORDER }
