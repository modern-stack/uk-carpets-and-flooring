import React from 'react'
import Image from 'gatsby-image'

import { Container, Content, Overlay } from './styled'

function Banner({ backgroundImage, h1text, h2text, h3text, ctatext }) {
  console.log('>>>>>> ', h1text, h2text, h3text, ctatext)
  return (
    <Container style={{ padding: 0, border: 0 }}>
      <Overlay>
        <Content>
          <h1>{h1text}</h1>
          <h2>{h2text}</h2>
          <h3>{h3text}</h3>
        </Content>
      </Overlay>

      <Image fluid={backgroundImage.fluid} />
    </Container>
  )
}

export default Banner
