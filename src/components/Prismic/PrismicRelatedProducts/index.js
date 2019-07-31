import React from 'react'

import {
  RelatedProducts,
  Product,
  Products,
  Collection,
  SubTitle,
  ImageContainer,
} from './styled'

import Title from '../../Title'

export default ({ relatedproducts }) => (
  <RelatedProducts>
    <Title title={'Related Products'} />

    {relatedproducts.items && relatedproducts.items.length && (
      <Products>
        {relatedproducts.items.map($ => {
          if (!$.product1) return null
          return (
            <Product>
              {$.featuredImage && (
                <ImageContainer fluid={$.featuredImage.fluid} />
              )}
              <Collection>{$.product1.name}</Collection>
              <SubTitle>{$.name}</SubTitle>
              <p>£{$.price}</p>
            </Product>
          )
        })}
      </Products>
    )}
  </RelatedProducts>
)
