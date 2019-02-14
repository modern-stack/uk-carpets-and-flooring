import React, { useState, useEffect } from 'react'
import fb from '../../services/firebase'

import { Testimonials, Title, Carousel } from './styled'

export default () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(async $ => {
    setTestimonials(await fb.allTestimonials().then($ => $))
  }, [])

  console.log('>>>>> ', testimonials)

  return (
    <Testimonials>
      <Title>Client Testimonials</Title>
      {testimonials && testimonials.length && (
        <React.Fragment>
          {testimonials.map($ => (
            <div> twat {$.displayName}</div>
          ))}
        </React.Fragment>
      )}

      <button
        onClick={() =>
          fb.createTestimonial({
            rating: 'bar',
            summary: 'Simply stunning',
            review: 'This is the review',
            wouldRecomend: true,
            displayName: fb.auth.currentUser.displayName,
            photoURL: fb.auth.currentUser.photoURL,
          })
        }
      >
        Add testy
      </button>
    </Testimonials>
  )
}
