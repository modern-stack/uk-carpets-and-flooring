import React, { useState, useEffect } from 'react'
import fb from '../../services/firebase'

import Desktop from './Desktop'
import Mobile from './Mobile'

function formatDate(timestamp) {
  const date = new Date(timestamp)
  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
}

export default () => {
  const [testimonials, setTestimonials] = useState([])
  const [position, setPosition] = useState(0)

  useEffect(async $ => {
    setTestimonials(await fb.allTestimonials().then($ => $))
  }, [])

  console.log('>>>>> ', testimonials)

  return (
    <React.Fragment>
      <Desktop
        formatDate={formatDate}
        position={position}
        setPosition={setPosition}
        testimonials={testimonials}
      />

      <Mobile
        formatDate={formatDate}
        position={position}
        setPosition={setPosition}
        testimonials={testimonials}
      />
    </React.Fragment>
  )
}
