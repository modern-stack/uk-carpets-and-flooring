import React, { useState, useEffect } from 'react'
import fb from '../../services/firebase'
import { FaStar } from 'react-icons/fa'

import {
  Testimonials,
  Title,
  Carousel,
  Slide,
  Testimonial,
  Image,
  Content,
  Details,
  Profile,
  TestimonialContainer,
  SlideSelection,
  SlideSelector,
} from './styled'

const incrementCarousel = (position, setPosition, slideCount) => {
  setPosition(position + 1 > slideCount - 1 ? 0 : position + 1)
}

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

  const slides = []

  for (var $ = 0; $ < testimonials.length; $ += 3) {
    slides.push(testimonials.slice($, $ + 3))
  }

  return (
    <TestimonialContainer>
      <Title>Client Testimonials</Title>

      <Testimonials>
        <Carousel>
          {slides &&
            slides.length &&
            slides.map(($, index) => (
              <Slide key={index} visible={index === position}>
                {$.map($ => (
                  <Content>
                    <Testimonial>
                      <div />
                      <div>{$.review}</div>
                      <div />
                      <div>
                        <Details>
                          <div>
                            <Image src={$.photoURL} />
                          </div>
                          <Profile>
                            <div>{$.displayName}</div>
                            <div>{formatDate($.date)}</div>
                          </Profile>
                          <div>
                            {Array.from(Array(5)).map($ => (
                              <FaStar color="gold" />
                            ))}
                          </div>
                          <div />
                        </Details>
                      </div>
                    </Testimonial>
                  </Content>
                ))}
              </Slide>
            ))}
        </Carousel>
      </Testimonials>
      <SlideSelection>
        {slides.map(($, i) => (
          <SlideSelector
            onClick={() => setPosition(i)}
            selected={i === position}
          />
        ))}
      </SlideSelection>
    </TestimonialContainer>
  )
}
