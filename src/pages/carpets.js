import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import SEO from '../components/seo'
import ContentfulComponents from '../components/contentful'
import InstagramFeed from '../components/instagram'

const renderContentfulComponents = contentfulPage => {
  if (!contentfulPage) return null

  return contentfulPage.content.map($ => {
    const Component = ContentfulComponents[$.__typename]
    return Component ? <Component {...$} /> : null
  })
}

export default ({ data }) => {
  const { allInstagramContent, contentfulPage } = data

  return (
    <Layout>
      <SEO title="Carpets" keywords={[`gatsby`, `application`, `react`]} />
      <React.Fragment>
        {renderContentfulComponents(contentfulPage)}
        <Testimonials />
        <InstagramFeed feed={allInstagramContent} />
      </React.Fragment>
    </Layout>
  )
}

export const query = graphql`
  query {
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
