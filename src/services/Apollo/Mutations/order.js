import gql from 'graphql-tag'

const CREATE_ORDER = gql`
  mutation update_Orders($Id: jsonb!) {
    update_Orders(where: {}, _append: { Items: $Id }) {
      returning {
        Id
        Items
      }
    }
  }
`

export { CREATE_ORDER }
