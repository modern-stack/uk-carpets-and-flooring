import gql from 'graphql-tag'

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
      }
    }
  }
`

export { UPSERT_ORDER }
