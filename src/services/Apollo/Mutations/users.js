import gql from 'graphql-tag'

const UPDATE_USER = gql`
  {
    update_User(_set: { id: $id }, where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`

export { UPDATE_USER }
