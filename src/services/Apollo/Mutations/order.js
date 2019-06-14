import gql from 'graphql-tag'

const ADD_TO_ORDER = gql`
  mutation update_Orders($Id: jsonb!) {
    update_Orders(where: {}, _append: { Items: $Id }) {
      returning {
        Id
        Items
      }
    }
  }
`

export { ADD_TO_ORDER }
