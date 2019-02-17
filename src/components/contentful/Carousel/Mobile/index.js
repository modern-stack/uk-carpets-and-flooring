import React from 'react'
import Image from 'gatsby-image'
import ReactSwipe from 'react-swipe'

import { Slide } from './styled'

export default ({ slides }) => (
  <ReactSwipe className="carousel" swipeOptions={{ continuous: true }}>
    {slides.map($ => (
      <Slide>
        <Image style={{ width: '100%' }} fluid={$.image.fluid} />
      </Slide>
    ))}
  </ReactSwipe>
)
