import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import SwipeableViews from 'react-swipeable-views'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

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
} from './styled'

export default ({ pageContext }) => {
  const { node } = pageContext

  const [sku, setSku] = useState(node.skus[0])
  const [slideIndex, setSlideIndex] = useState(0)

  console.log('>>>>', slideIndex)
  return (
    <Layout>
      <SEO title="Products" />
      <Header />
      <MainContent>
        <Product>
          <ImageContainer>
            <Img fluid={sku.featuredImage.fluid} />
          </ImageContainer>
          <Slider>
            <FaAngleUp
              onClick={() =>
                setSlideIndex(slideIndex - 1 < 0 ? slideIndex : slideIndex - 1)
              }
            />

            <SwipeableViews
              index={slideIndex}
              axis={'y'}
              containerStyle={{ height: '300px' }}
              style={{ padding: '5px 0' }}
            >
              {node.skus.map($ => (
                <Slide>
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

            <FaAngleDown
              onClick={() =>
                setSlideIndex(
                  slideIndex + 1 > node.skus.length
                    ? slideIndex
                    : slideIndex + 1
                )
              }
            />
          </Slider>
          <Details>
            <h2>{node.name}</h2>
            <h1>{sku.name}</h1>
          </Details>
        </Product>
      </MainContent>
    </Layout>
  )
}
