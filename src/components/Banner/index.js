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
    {console.log('banner >>>', banner)}
    <ImageContainer>
      {banner.image && (
        <Image
          style={{ height: '100%' }}
          fluid={banner.image.localFile.childImageSharp.fluid}
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
