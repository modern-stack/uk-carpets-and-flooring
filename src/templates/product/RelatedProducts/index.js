import React from 'react'
import Img from 'gatsby-image'
import {
  RelatedProducts,
  Product,
  Products,
  Collection,
  SubTitle,
} from './styled'

import Title from '../../../components/Title'
import Slider from '../../../components/Slider'

export default ({ relatedProducts = [] }) => (
  <RelatedProducts>
    <Title title={'Related Products'} />

    {relatedProducts && relatedProducts.length && (
      <Products>
        {relatedProducts.map($ => {
          if (!$.product) return null
          return (
            <Product>
              {$.featuredImage && <Img fluid={$.featuredImage.fluid} />}
              <Collection>{$.product.name}</Collection>
              <SubTitle>{$.name}</SubTitle>
              <p>£{$.price}</p>
            </Product>
          )
        })}
      </Products>
    )}
  </RelatedProducts>
)
