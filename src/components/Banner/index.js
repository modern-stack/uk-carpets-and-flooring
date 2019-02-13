import React from 'react'
import Image from 'gatsby-image'

import {
  Banner,
  Content,
  Title,
  SubContent,
  Button,
  ImageContainer,
} from './styled'

export default ({ banner }) => (
  <Banner>
    <ImageContainer>
      {banner.image && (
        <Image style={{ position: 'initial' }} fluid={banner.image.fluid} />
      )}
    </ImageContainer>
    <Content>
      <Title>{banner.title}</Title>
      <SubContent>{banner.content}</SubContent>
      <Button>{banner.cta}</Button>
    </Content>
  </Banner>
)
