import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Gallery, GalleryItem } from '../components/styled/Gallery.js'
import { Preview, PreviewItem } from '../components/styled/PreviewGallery'

function renderSkus(skus) {
  return (
    <Preview>
      {skus.map($ => (
        <PreviewItem>
          {$.featuredImage && (
            <Img
              fluid={{
                ...$.featuredImage.fluid,
                aspectRatio: 1 / 1,
              }}
            />
          )}
        </PreviewItem>
      ))}
    </Preview>
  )
}

export default ({ data }) => (
  <Layout>
    <SEO title="Products" />
    <h1>Products</h1>

    <Gallery>
      {data.allContentfulProduct.edges.map($ => (
        <GalleryItem>
          <Link to={`/products/${$.node.name}`}>
            {$.node.featuredImage && (
              <Img
                fluid={{ ...$.node.featuredImage.fluid, aspectRatio: 1 / 1 }}
              />
            )}
            {renderSkus($.node.skus)}
          </Link>
        </GalleryItem>
      ))}
    </Gallery>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
          name
          featuredImage {
            fluid(maxWidth: 1000, maxHeight: 1000) {
              sizes
              src
              srcSet
            }
          }
          skus {
            name
            featuredImage {
              fluid(maxWidth: 613) {
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`
