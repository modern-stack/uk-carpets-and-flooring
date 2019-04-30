import React, { useState, useEffect } from 'react'

import Desktop from './Desktop'
import Mobile from './Mobile'

function formatDate(timestamp) {
  const date = new Date(timestamp)
  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
}

const setContent = setTestimonials => {
  // fb.allTestimonials()
  //   .then($ => $)
  //   .then($ => setTestimonials($))
}

export default () => {
  const [testimonials, setTestimonials] = useState([])
  const [position, setPosition] = useState(0)

  useEffect($ => {
    setContent(setTestimonials)
  }, [])

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
