import React, { useState } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { GET_TESTIMONIALS } from '../../services/Apollo/Queries/testimonial'

import Desktop from './Desktop'
import Mobile from './Mobile'

function formatDate(timestamp) {
  const date = new Date(`${timestamp}`)
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export default () => {
  const { loading, data } = useQuery(GET_TESTIMONIALS)
  const [position, setPosition] = useState(0)

  if (loading) return <div>Loading...</div>

  return (
    <React.Fragment>
      <Desktop
        formatDate={formatDate}
        position={position}
        setPosition={setPosition}
        testimonials={data.Testimonials_aggregate.nodes}
      />

      <Mobile
        formatDate={formatDate}
        position={position}
        setPosition={setPosition}
        testimonials={data.Testimonials_aggregate.nodes}
      />
    </React.Fragment>
  )
}
