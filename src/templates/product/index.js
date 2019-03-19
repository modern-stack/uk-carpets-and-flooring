import React, { useState } from 'react'
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
} from './styled'

export default ({ pageContext }) => {
  const { node } = pageContext

  const [sku, setSku] = useState(node.skus[0])

  console.log('>>>>', node, sku)
  return (
    <Layout>
      <SEO title="Products" />
      <Header />
      <MainContent>
        <Product>
          <ImageContainer>
            <Img fluid={sku.featuredImage.fluid} />
          </ImageContainer>
          <Slider>selection</Slider>
          <Details>
            <h2>{node.name}</h2>
            <h1>{sku.name}</h1>
          </Details>
        </Product>
      </MainContent>
    </Layout>
  )
}
