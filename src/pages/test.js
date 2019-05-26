import React from 'react'

import { useQuery } from 'react-apollo-hooks'

import { ALL_SKUS } from '../services/Apollo/Queries/skus'

export default () => {
  const { data, error, loading } = useQuery(ALL_SKUS)

  if (loading) return <div>Loading...</div>

  console.log('>>>', data.allSkus)

  return (
    <div>
      {data.allSkus.edges.map($ => {
        return <div>{$.node.name[0].text}</div>
      })}
    </div>
  )
}
