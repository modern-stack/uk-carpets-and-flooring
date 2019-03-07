import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Gallery, GalleryItem } from '../components/styled/Gallery.js'
import { Preview, PreviewItem } from '../components/styled/PreviewGallery'

function renderSkus(skus) {
  console.log(skus)
  return (
    <Preview>
      {skus.map($ => (
        <PreviewItem>
          {$.featuredImage && <Img fixed={$.featuredImage.fixed} />}
        </PreviewItem>
      ))}
    </Preview>
  )
}

export default ({ pageContext }) => {
  const { skus } = pageContext
  return (
    <Layout>
      <SEO title="Products" />
      <h1>Products</h1>

      <Gallery>
        {skus.map($ => (
          <GalleryItem>
            <Link to={`/products/${$.name}`}>
              {$.featuredImage && <Img fixed={$.featuredImage.fixed} />}
              {/* {renderSkus(skus)} */}
            </Link>
          </GalleryItem>
        ))}
      </Gallery>
    </Layout>
  )
}
