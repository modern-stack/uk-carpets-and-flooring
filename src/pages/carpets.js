import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import ProductList from '../components/productlist'
import SEO from '../components/seo'
import ContentfulComponents from '../components/contentful'
import InstagramFeed from '../components/instagram'
import InnerContent from '../components/layout/innercontent'
import ProductContainer from '../components/layout/productcontainer'

const renderContentfulComponents = contentfulPage => {
  if (!contentfulPage) return null

  return contentfulPage.content.map($ => {
    console.log('rendering >>>>', $.__typename, $)
    const Component = ContentfulComponents[$.__typename]
    return Component ? <Component {...$} /> : null
  })
}

export default ({ data }) => {
  const { allInstagramContent, contentfulPage, allContentfulProduct } = data

  console.log('products >>>>', allContentfulProduct)

  return (
    <Layout>
      <SEO title="Carpets" keywords={[`gatsby`, `application`, `react`]} />
      <React.Fragment>
        {renderContentfulComponents(contentfulPage)}

        <InnerContent>
          <ProductContainer>
            <div>This is the search</div>
            <ProductList products={allContentfulProduct.edges} />
          </ProductContainer>
        </InnerContent>

        <Testimonials />
        <InstagramFeed feed={allInstagramContent} />
      </React.Fragment>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulPage(id: { eq: "63b6f8bb-9859-596a-a1d3-170ef58f7194" }) {
      id
      title
      content {
        ... on ContentfulBanner {
          id
          title
          subtext
          image {
            fluid(quality: 50, maxHeight: 700, maxWidth: 1240) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
        ... on ContentfulProductHeader {
          id
          title
          subTitle
        }
      }
    }
    allContentfulProduct(
      limit: 10
      filter: { productType: { name: { eq: "Carpets" } } }
    ) {
      edges {
        node {
          id
          name
          featuredImage {
            fluid(maxWidth: 300) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          productType {
            id
          }
        }
      }
    }
    allInstagramContent {
      edges {
        node {
          link
          caption {
            text
          }
          localImage {
            childImageSharp {
              fluid(maxWidth: 100, quality: 50) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
          images {
            standard_resolution {
              width
              height
              url
            }
            low_resolution {
              url
            }
          }
        }
      }
    }
  }
`
