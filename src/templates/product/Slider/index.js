import React, { useState } from 'react'

import {
  FaAngleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa'
import Img from 'gatsby-image'

import { isMobile, isTablet } from 'react-device-detect'
import SwipeableViews from 'react-swipeable-views'

import { Slider, Slide, SliderImage } from './styled'

export default ({ node, sku, setSku }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  return (
    <Slider>
      <div>
        {isMobile ? (
          <FaAngleLeft
            onClick={() =>
              setSlideIndex(slideIndex - 1 < 0 ? slideIndex : slideIndex - 1)
            }
          />
        ) : (
          <FaAngleUp
            onClick={() =>
              setSlideIndex(slideIndex - 1 < 0 ? slideIndex : slideIndex - 1)
            }
          />
        )}
      </div>

      <SwipeableViews
        index={slideIndex}
        axis={isMobile && !isTablet ? 'x' : 'y'}
        containerStyle={{
          height: isMobile && !isTablet ? '100%' : '300px',
          width: isMobile && !isTablet ? '25%' : '100%',
        }}
        style={{ padding: '5px 0' }}
      >
        {node.skus.map($ => (
          <Slide onClick={() => setSku($)} selected={sku.id === $.id}>
            <SliderImage>
              {$.featuredImage && (
                <Img
                  fluid={$.featuredImage.fluid}
                  style={{ position: 'unset' }}
                />
              )}
            </SliderImage>
          </Slide>
        ))}
      </SwipeableViews>

      <div>
        {isMobile ? (
          <FaAngleRight
            onClick={() =>
              setSlideIndex(
                slideIndex + 1 > node.skus.length ? slideIndex : slideIndex + 1
              )
            }
          />
        ) : (
          <FaAngleDown
            onClick={() =>
              setSlideIndex(
                slideIndex + 1 > node.skus.length ? slideIndex : slideIndex + 1
              )
            }
          />
        )}
      </div>
    </Slider>
  )
}
