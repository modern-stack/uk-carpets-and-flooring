import React from 'react'
import Image from 'gatsby-image'

import {
  Banner,
  Content,
  Title,
  SubContent,
  Button,
  ImageContainer,
  Container,
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
    {console.log('Banners >>>>', banner)}
    <Container yAlign={banner.contentaligny} xAlign={banner.contentalignx}>
      <Content textalign={`${banner.textalign}`}>
        <Title>{banner.title.text}</Title>
        <SubContent>{banner.content.text}</SubContent>
        {banner.cta && <Button>{banner.cta.text}</Button>}
      </Content>
    </Container>
  </Banner>
)
