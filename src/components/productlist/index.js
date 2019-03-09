import React from 'react'
import Image from 'gatsby-image'
import { List, Product, ImageContainer, Buttons } from './styled'

export default ({ products }) => {
  console.log('>>>>>', products)
  return (
    <List>
      {products.map($ => (
        <Product>
          <ImageContainer>
            {$.featuredImage && <Image fluid={$.featuredImage.fluid} />}

            <Buttons>
              <div>View Details</div>
              <div>Add to wishlist</div>
            </Buttons>
          </ImageContainer>

          <div>{$.product.name}</div>
          <div>{$.name}</div>
          <div>{$.subtitle}</div>
          <div>£{$.price}</div>
          <ul>
            <li>Something 2</li>
            <li>Something 3</li>
          </ul>
        </Product>
      ))}
    </List>
  )
}
