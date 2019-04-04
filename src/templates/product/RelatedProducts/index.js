import React from 'react'
import Img from 'gatsby-image'
import { RelatedProducts, Product, Collection, SubTitle } from './styled'

import Title from '../../../components/Title'
import Slider from '../../../components/Slider'

export default ({ relatedProducts = [] }) => (
  <RelatedProducts>
    <Title title={'Related Products'} />

    {relatedProducts && relatedProducts.length && (
      <Slider>
        {relatedProducts.map($ => (
          <Product>
            {$.featuredImage && <Img fluid={$.featuredImage.fluid} />}
            <Collection>{$.product[0].name}</Collection>
            <SubTitle>{$.name}</SubTitle>
            <p>£{$.price}</p>
          </Product>
        ))}
      </Slider>
    )}
  </RelatedProducts>
)
