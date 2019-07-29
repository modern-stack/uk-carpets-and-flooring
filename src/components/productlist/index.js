import React from 'react'
import Image from 'gatsby-image'
import { List, Product, ImageContainer } from './styled'
import { navigateTo } from 'gatsby-link'

export default ({ products }) => {
  return (
    <List>
      {products.map($ => {
        const { name, product_type, featured_image } = $.node.data

        console.log(name, product_type, featured_image)

        return (
          <Product>
            <ImageContainer
              onClick={() =>
                navigateTo(
                  `/${product_type.toLowerCase()}/${name.toLowerCase()}`
                )
              }
            >
              {featured_image && featured_image.localFile && (
                <Image fluid={featured_image.localFile.childImageSharp.fluid} />
              )}
            </ImageContainer>

            <h2>{name}</h2>
          </Product>
        )
      })}
    </List>
  )
}
