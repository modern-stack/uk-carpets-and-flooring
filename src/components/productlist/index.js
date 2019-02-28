import React from 'react'
import Image from 'gatsby-image'
import { List, Product, ImageContainer } from './styled'

export default ({ products }) => {
  console.log('>>>>', products)
  return (
    <List>
      {products.map($ => (
        <Product>
          <ImageContainer>
            {$.node.featuredImage && (
              <Image fluid={$.node.featuredImage.fluid} />
            )}
          </ImageContainer>
          <div>{$.node.name}</div>
          <div>{$.node.subtitle}</div>
          <div>{$.node.price}</div>
          <ul>
            <li>Something 1</li>
            <li>Something 2</li>
            <li>Something 3</li>
          </ul>
        </Product>
      ))}
    </List>
  )
}
