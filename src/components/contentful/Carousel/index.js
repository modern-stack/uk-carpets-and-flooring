import React, { useState } from 'react'
import Image from 'gatsby-image'
import { CarouselContainer, Slide } from './styled'

export default ({ slides }) => {
  const [position, setPosition] = useState(0)

  return (
    <div>
      <CarouselContainer>
        {slides.map((slide, index) => (
          <Slide key={index} visible={index === position}>
            <Image style={{ width: '100%' }} fluid={slide.image.fluid} />
          </Slide>
        ))}
      </CarouselContainer>
      <button
        onClick={() =>
          setPosition(position + 1 > slides.length - 1 ? 0 : position + 1)
        }
      >
        Next
      </button>
    </div>
  )
}
