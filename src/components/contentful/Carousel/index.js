import React, { useState, useEffect } from 'react'
import Image from 'gatsby-image'
import {
  CarouselContainer,
  Slide,
  SlideSelection,
  SlideSelector,
} from './styled'

const incrementCarousel = (position, setPosition, slideCount) => {
  setPosition(position + 1 > slideCount - 1 ? 0 : position + 1)
}

export default ({ slides }) => {
  const [position, setPosition] = useState(0)

  useEffect($ => {
    const carouselTimer = setTimeout(
      () => incrementCarousel(position, setPosition, slides.length),
      10000
    )
    return () => {
      clearTimeout(carouselTimer)
    }
  })

  return (
    <div>
      <CarouselContainer>
        {slides.map((slide, index) => (
          <Slide key={index} visible={index === position}>
            <Image style={{ width: '100%' }} fluid={slide.image.fluid} />
            <h1>We Provide Ultimate Flooring</h1>
            <h2>
              We make it a priority to offer flexible servuce to accomodate your
              needs.
            </h2>

            <button />
          </Slide>
        ))}

        <SlideSelection>
          {slides.map(($, i) => (
            <SlideSelector
              onClick={() => setPosition(i)}
              selected={i === position}
            />
          ))}
        </SlideSelection>
      </CarouselContainer>
      <button
        onClick={() => incrementCarousel(position, setPosition, slides.length)}
      />
    </div>
  )
}
