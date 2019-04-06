import React from 'react'
import Image from 'gatsby-image'
import { List, Product, ImageContainer, Buttons, Button } from './styled'
import { navigate } from '@reach/router'
import Link from 'gatsby-link'

export default ({ products }) => {
  return (
    <List>
      {products.map($ => (
        <Product>
          <ImageContainer>
            {$.featuredImage && <Image fluid={$.featuredImage.fluid} />}

            <Buttons>
              <Link
                to={`/${$.product.productType.name.toLowerCase()}/${
                  $.product.name
                }`}
              >
                <Button>View Details</Button>
              </Link>

              <div>
                <Button>Add to wishlist</Button>
              </div>
            </Buttons>
          </ImageContainer>

          <div>{$.product.name}</div>
          <div>{$.name}</div>
          <div>{$.subtitle}</div>
          <div>£{$.price}</div>
          <ul>
            <li>{`${$.width} inch. wide  x ${$.length} inc. Long x ${
              $.thickness
            } mm thick`}</li>
            <li>Something 3</li>
          </ul>
        </Product>
      ))}
    </List>
  )
}
