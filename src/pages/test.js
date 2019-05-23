import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import { HasuraClient } from '../services/Apollo'

export default () => {
  const APOLLO_QUERY = gql`
    {
      query {
        Test {
          Id
          Name
        }
      }
    }
  `

  console.log('>>>', HasuraClient)

  return (
    <div>
      <Query query={APOLLO_QUERY} client={HasuraClient}>
        {({ data, loading, error }) => {
          console.log('response >>>>>', data, loading, error)

          return <div>Heres</div>
        }}
      </Query>
    </div>
  )
}
