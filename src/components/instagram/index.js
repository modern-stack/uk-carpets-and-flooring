import React from 'react'
import Image from 'gatsby-image'
import { FaInstagram } from 'react-icons/fa'
import { Instagram, Gallery, Title } from './styled'

import { StaticQuery, graphql } from 'gatsby'

export default ({ feed }) => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={({ allInstagramContent }) => (
        <Instagram>
          <Title>
            <FaInstagram style={{ padding: '0 8px' }} />
            Follow us on Instagram
          </Title>
          <Gallery>
            {allInstagramContent.edges.slice(0, 12).map((item, i) => {
              return item.node.localImage ? (
                <Image
                  fluid={item.node.localImage.childImageSharp.fluid}
                  key={i}
                />
              ) : (
                <div />
              )
            })}
          </Gallery>
        </Instagram>
      )}
    />
  )
}
