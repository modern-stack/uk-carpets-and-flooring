import React from 'react'
import { FaStar } from 'react-icons/fa'

import {
  Testimonials,
  Title,
  Carousel,
  Slide,
  SlideSelection,
  SlideSelector,
  Testimonial,
  Image,
  Content,
  Details,
  Profile,
  TestimonialContainer,
  DesktopContainer,
} from './styled'

export default ({ testimonials, formatDate, position, setPosition }) => {
  const slides = []

  for (var $ = 0; $ < testimonials.length; $ += 3) {
    slides.push(testimonials.slice($, $ + 3))
  }

  return (
    <DesktopContainer>
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
    </DesktopContainer>
  )
}
