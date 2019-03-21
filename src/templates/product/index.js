import React, { useState } from 'react'
import {
  FaAngleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaStar,
} from 'react-icons/fa'
import SwipeableViews from 'react-swipeable-views'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Rating from 'react-rating'

import { isMobile } from 'react-device-detect'

import Img from 'gatsby-image'

import {
  Header,
  MainContent,
  Product,
  Details,
  Slider,
  ImageContainer,
  Slide,
  SliderImage,
  Review,
} from './styled'

export default ({ pageContext }) => {
  const { node } = pageContext

  const [sku, setSku] = useState(node.skus[0])
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <Layout>
      <SEO title="Products" />
      <Header />
      <MainContent>
        <Product>
          <ImageContainer>
            {sku.featuredImage && <Img fluid={sku.featuredImage.fluid} />}
          </ImageContainer>
          <Slider>
            <div>
              {isMobile ? (
                <FaAngleLeft
                  onClick={() =>
                    setSlideIndex(
                      slideIndex - 1 < 0 ? slideIndex : slideIndex - 1
                    )
                  }
                />
              ) : (
                <FaAngleUp
                  onClick={() =>
                    setSlideIndex(
                      slideIndex - 1 < 0 ? slideIndex : slideIndex - 1
                    )
                  }
                />
              )}
            </div>

            <SwipeableViews
              index={slideIndex}
              axis={isMobile ? 'x' : 'y'}
              containerStyle={{
                height: isMobile ? '100%' : '300px',
                width: isMobile ? '20%' : '100%',
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
                      slideIndex + 1 > node.skus.length
                        ? slideIndex
                        : slideIndex + 1
                    )
                  }
                />
              ) : (
                <FaAngleDown
                  onClick={() =>
                    setSlideIndex(
                      slideIndex + 1 > node.skus.length
                        ? slideIndex
                        : slideIndex + 1
                    )
                  }
                />
              )}
            </div>
          </Slider>
          <Details>
            <h2>{node.name}</h2>
            <h1>{sku.name}</h1>

            <Review>
              <Rating
                emptySymbol={
                  <FaStar
                    style={{
                      color: 'black',
                    }}
                  />
                }
                fullSymbol={<FaStar style={{ color: 'gold' }} />}
              />
              <div>Write a Review</div>
              <div>Add to Wishlist</div>
            </Review>
          </Details>
        </Product>
      </MainContent>
    </Layout>
  )
}
