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
              <Review>{$.Review}</Review>
              <div />
              <div>
                <Details>
                  <Profile>
                    <div>
                      <Image
                        src={
                          $.User.Picture ||
                          'http://aux.iconspalace.com/uploads/guest-icon-256.png'
                        }
                      />
                    </div>
                    <ProfileDetails>
                      <div>
                        {$.User.Given_Name} {$.User.Family_Name || null}
                      </div>
                      <div>{formatDate($.CreatedAt)}</div>
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
