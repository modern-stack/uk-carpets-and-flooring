import React from 'react'
import Image from 'gatsby-image'
import { List, Product, ImageContainer, Buttons, Button } from './styled'
import { navigate } from '@reach/router'
import Link from 'gatsby-link'

export default ({ products }) => {
  console.log('products >>>', products)
  return (
    <List>
      {products.map($ => {
        const sku = $.data
        const product = sku.product.document[0].data
        return (
          <Product>
            <ImageContainer>
              {sku.featuredimage && (
                <Image
                  fluid={sku.featuredimage.localFile.childImageSharp.fluid}
                />
              )}

              <Buttons>
                <Link
                  to={`/${product.product_type.toLowerCase()}/${
                    product.name.text
                  }`}
                >
                  <Button>View Details</Button>
                </Link>

                <div>
                  <Button>Add to wishlist</Button>
                </div>
              </Buttons>
            </ImageContainer>

            <div>{product.name.text}</div>
            <div>{sku.name.text}</div>
            <div>{sku.subtitle}</div>
            <div>£{sku.price.text}</div>
            <ul>
              <li>{`${sku.width} inch. wide  x ${sku.length} inc. Long x ${
                sku.thickness
              } mm thick`}</li>
              <li>Something 3</li>
            </ul>
          </Product>
        )
      })}
    </List>
  )
}
