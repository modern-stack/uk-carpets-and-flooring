import React from 'react'
import { navigateTo } from 'gatsby-link'

import {
  RelatedProducts,
  Product,
  Products,
  Collection,
  SubTitle,
  ImageContainer,
} from './styled'

import Title from '../../Title'
import Image from '../../Image'

export default ({ relatedproducts }) => {
  if (!relatedproducts.items || !relatedproducts.items.length) return null

  return (
    <div>
      <RelatedProducts>
        <Title title={'Related Products'} />

        <Products>
          {relatedproducts.items.map($ => {
            if (!$.product) return null

            const { product } = $

            const { name, featuredimage, sku_product } = product.sku[0].data

            return (
              <Product
                onClick={() =>
                  navigateTo(
                    sku_product
                      ? `/${sku_product.document[0].data.product_type.toLowerCase()}/${sku_product.document[0].data.name.toLowerCase()}`
                      : 'Unknown'
                  )
                }
              >
                {featuredimage && (
                  <ImageContainer
                    fluid={featuredimage._4_3.localFile.childImageSharp.fluid}
                  />
                )}
                <Collection>
                  {sku_product ? sku_product.document[0].data.name : 'Unknown'}
                </Collection>
                <SubTitle>{name.text}</SubTitle>
              </Product>
            )
          })}
        </Products>
      </RelatedProducts>
    </div>
  )
}
