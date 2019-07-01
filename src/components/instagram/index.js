import React from 'react'
import Image from 'gatsby-image'
import { FaInstagram } from 'react-icons/fa'
import { Instagram, Gallery, Title, GalleryItem } from './styled'

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
                    fixed(height: 150, quality: 100) {
                      ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
            {allInstagramContent.edges.slice(0, 12).map((item, i) => (
              <GalleryItem>
                <Image
                  style={{ width: '100%' }}
                  fixed={item.node.localImage.childImageSharp.fixed}
                  key={i}
                />
              </GalleryItem>
            ))}
          </Gallery>
        </Instagram>
      )}
    />
  )
}
