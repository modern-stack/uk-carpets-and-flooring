import React, { useState } from 'react'
import Image from 'gatsby-image'
import ReactSwipe from 'react-swipe'

import {
  Carousel,
  Slide,
  SlideSelection,
  SlideSelector,
  Content,
  Title,
  SubContent,
  Button,
  Overlay,
} from './styled'

export default ({ slides }) => {
  let reactSwipeEl
  const [position, setPosition] = useState(0)

  return (
    <Carousel>
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          startSlide: position,
          continuous: true,
          callback: $ => setPosition($),
        }}
        ref={el => (reactSwipeEl = el)}
      >
        {slides.map($ => (
          <Slide>
            <Overlay />
            <Image
              style={{ width: '100%' }}
              fluid={$.gallery_image._4_3.localFile.childImageSharp.fluid}
            />
            <Content>
              <Title>{$.title.text}</Title>
              <SubContent>{$.description.text}</SubContent>
              <Button>{'Click Here'}</Button>
            </Content>
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
