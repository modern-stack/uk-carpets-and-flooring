import React from 'react'
import Image from 'gatsby-image'

import { ImageContainer } from './styled'

export default props => (
  <ImageContainer>
    <Image {...props} />
  </ImageContainer>
)
