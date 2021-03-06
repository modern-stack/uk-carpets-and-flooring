import React, { useState, useEffect } from 'react'
import Image from 'gatsby-image'
import {
  CarouselContainer,
  Slide,
  SlideSelection,
  SlideSelector,
  Content,
  Title,
  SubContent,
  Button,
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
            <Image
              style={{ width: '100%', position: 'unset' }}
              fluid={slide.gallery_image.localFile.childImageSharp.fluid}
            />
            <Content>
              <Title>{slide.title.text}</Title>
              <SubContent>{slide.description.text}</SubContent>
              <Button>{'Click Here'}</Button>
            </Content>
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
