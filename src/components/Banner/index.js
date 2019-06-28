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
  <Banner maxHeight={banner.maxHeight}>
    <ImageContainer>
      {banner.image && (
        <Image
          style={{ height: '100%', position: 'unset' }}
          fixed={banner.image.localFile.childImageSharp.fixed}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      )}
    </ImageContainer>
    <Content>
      <Title>{banner.title.text}</Title>
      <SubContent>{banner.content.text}</SubContent>
      {banner.cta && <Button>{banner.cta.text}</Button>}
    </Content>
  </Banner>
)
