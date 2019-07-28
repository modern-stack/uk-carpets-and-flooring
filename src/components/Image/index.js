import React from 'react'
import Image from 'gatsby-image'

import { Container, ImageContainer } from './styled'

export default props => (
  <Container>
    <ImageContainer>
      <Image {...props} />
    </ImageContainer>
  </Container>
)
