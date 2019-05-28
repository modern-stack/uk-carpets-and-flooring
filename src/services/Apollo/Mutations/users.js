import gql from 'graphql-tag'

const UPSERT_USER = gql`
  mutation insert_User(
    $id: uuid
    $given_name: String
    $family_name: String
    $email: String
    $stripe_id: String
  ) {
    insert_User(
      objects: [
        {
          Id: $id
          Given_Name: $given_name
          Family_Name: $family_name
          Email: $email
          Stripe_Id: $stripe_id
        }
      ]
      on_conflict: { constraint: User_pkey, update_columns: [Id] }
    ) {
      returning {
        Id
      }
    }
  }
`

export { UPSERT_USER }
