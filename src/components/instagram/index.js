import React from 'react'
import Image from 'gatsby-image'
import { FaInstagram } from 'react-icons/fa'
import { Instagram, Gallery, Title } from './styled'

export default ({ feed }) => (
  <Instagram>
    <Title>
      <FaInstagram style={{ padding: '0 8px' }} />
      Follow us on Instagram
    </Title>
    <Gallery>
      {feed.edges.slice(0, 12).map((item, i) => {
        return item.node.localImage ? (
          <Image fluid={item.node.localImage.childImageSharp.fluid} key={i} />
        ) : (
          <div />
        )
      })}
    </Gallery>
  </Instagram>
)
