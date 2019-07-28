import React from 'react'
import Image from 'gatsby-image'
import {
  List,
  Product,
  ImageContainer,
  Buttons,
  Button,
  AdditionaDetails,
} from './styled'
import Link from 'gatsby-link'

export default ({ products }) => {
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
                  to={`/${product.product_type.toLowerCase()}/${product.name.toLowerCase()}`}
                >
                  <Button>View Details</Button>
                </Link>

                <div>
                  <Button>Add to wishlist</Button>
                </div>
              </Buttons>
            </ImageContainer>

            <h2>{product.name}</h2>
            <div class="title">{sku.name.text}</div>

            <div class="price">£{sku.price.toFixed(2)}</div>
            <AdditionaDetails>
              <li>{`${sku.width || 'unknown'} in. wide  x ${sku.lengths ||
                'unknown'} in. Long x ${sku.thickness ||
                'unknown'} mm thick`}</li>

              <li>{sku.gloss}</li>
              <li>{sku.edge}</li>
            </AdditionaDetails>
          </Product>
        )
      })}
    </List>
  )
}
