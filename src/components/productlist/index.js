import React from 'react'
import Image from 'gatsby-image'
import { List, Product, ImageContainer } from './styled'
import { navigateTo } from 'gatsby-link'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ products }) => {
  const localQuery = useStaticQuery(graphql`
    query {
      ImageNotFound: file(relativePath: { eq: "image-not-found.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 960, maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <List>
      {products.map($ => {
        const { name, product_type, featured_image } = $.node.data

        return (
          <Product>
            <ImageContainer
              onClick={() =>
                navigateTo(
                  `/${product_type.toLowerCase()}/${name.toLowerCase()}`
                )
              }
            >
              {featured_image && featured_image.localFile ? (
                <Image fluid={featured_image.localFile.childImageSharp.fluid} />
              ) : (
                <Image fluid={localQuery.ImageNotFound.childImageSharp.fluid} />
              )}
            </ImageContainer>

            <h2>{name}</h2>
          </Product>
        )
      })}
    </List>
  )
}
