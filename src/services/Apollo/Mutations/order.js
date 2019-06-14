import gql from 'graphql-tag'

<<<<<<< HEAD
const ADD_TO_ORDER = gql`
  mutation update_Orders($Id: jsonb!) {
    update_Orders(where: {}, _append: { Items: $Id }) {
      returning {
        Id
        Items
=======
const UPSERT_ORDER = gql`
  {
    me {
      id
    }
  }
  mutation upsert_orders($id: String!) {
    insert_Orders(
      objects: [{ CustomerId: $id }]
      on_conflict: { constraint: Orders_pkey, update_columns: [CustomerId] }
    ) {
      returning {
        CustomerId
>>>>>>> b2d43ae842a0697cb34a64601a28f726a849d31e
      }
    }
  }
`

<<<<<<< HEAD
export { ADD_TO_ORDER }
=======
export { UPSERT_ORDER }
>>>>>>> b2d43ae842a0697cb34a64601a28f726a849d31e
