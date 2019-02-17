import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import SEO from '../components/seo'
import ContentfulComponents from '../components/contentful'
import InstagramFeed from '../components/instagram'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <React.Fragment>
      {data.contentfulPage.content.map($ => {
        const Component = ContentfulComponents[$.__typename]
        return Component ? <Component {...$} /> : null
      })}
      <Testimonials />
      <InstagramFeed feed={data.allInstagramContent} />
    </React.Fragment>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    contentfulPage(id: { eq: "06bfa36e-e597-56a6-bbd4-d536b5e56083" }) {
      id
      title
      content {
        ... on ContentfulCarousel {
          id
          name
          slides {
            title
            content
            cta
            image {
              fluid(quality: 100, maxWidth: 1240) {
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
        }
        ... on ContentfulBanners {
          banners {
            id
            title
            subtext
            subtitle
            cta
            image {
              fluid(quality: 100, maxWidth: 1240) {
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
            link
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
              fluid(maxHeight: 500, maxWidth: 500, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
