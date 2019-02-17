import React, { useState } from 'react'
import Image from 'gatsby-image'
import ReactSwipe from 'react-swipe'

import { Carousel, Slide, SlideSelection, SlideSelector } from './styled'

export default ({ slides }) => {
  let reactSwipeEl
  const [position, setPosition] = useState(0)
  return (
    <Carousel>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
        {slides.map($ => (
          <Slide>
            <Image style={{ width: '100%' }} fluid={$.image.fluid} />
          </Slide>
        ))}
      </ReactSwipe>

      <SlideSelection>
        {slides.map(($, i) => (
          <SlideSelector
            onClick={() => {
              setPosition(i)
              reactSwipeEl.slide(i)
            }}
            selected={i === position}
          />
        ))}
      </SlideSelection>
    </Carousel>
  )
}
