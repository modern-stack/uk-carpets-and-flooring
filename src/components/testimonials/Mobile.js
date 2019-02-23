import React from 'react'
import ReactSwipe from 'react-swipe'
import { FaStar } from 'react-icons/fa'

import {
  Title,
  SlideSelection,
  SlideSelector,
  Testimonial,
  Image,
  Details,
  Review,
  Profile,
  ProfileDetails,
  TestimonialContainer,
  MobileContainer,
} from './styled'

export default ({ testimonials, formatDate, position, setPosition }) => {
  const slides = testimonials.slice(0, 5)

  let reactSwipeEl

  return (
    <MobileContainer>
      <TestimonialContainer>
        <Title>Client Testimonials</Title>
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
            <Testimonial>
              <div />
              <Review>{$.review}</Review>
              <div />
              <div>
                <Details>
                  <Profile>
                    <div>
                      <Image src={$.photoURL} />
                    </div>
                    <ProfileDetails>
                      <div>{$.displayName}</div>
                      <div>{formatDate($.date)}</div>
                    </ProfileDetails>
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
      </TestimonialContainer>
    </MobileContainer>
  )
}
