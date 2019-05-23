import React from 'react'
import Img from 'gatsby-image'

import { SmallHero, Image } from './styled'

export default ({ primary }) => (
  <SmallHero>
    {/* <Image> */}
    <Img style={{}} fluid={primary.image.localFile.childImageSharp.fluid} />
    {/* </Image> */}
  </SmallHero>
)
