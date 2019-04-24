import React from 'react'

import {
  RelatedProducts,
  Product,
  Products,
  Collection,
  SubTitle,
  ImageContainer,
} from './styled'

import Title from '../../../components/Title'

export default ({ relatedProducts = [] }) => (
  <RelatedProducts>
    <Title title={'Related Products'} />

    {relatedProducts && relatedProducts.length && (
      <Products>
        {relatedProducts.map($ => {
          if (!$.product) return null
          return (
            <Product>
              {$.featuredImage && (
                <ImageContainer fluid={$.featuredImage.fluid} />
              )}
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
