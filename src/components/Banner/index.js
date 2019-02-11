import React from 'react'
import Image from 'gatsby-image'

import { Banner, Content, Title, SubContent, Button } from './styled'

export default ({ banner }) => (
  <Banner>
    {/* <Content> */}
    {banner.image && (
      <Image style={{ width: '100%' }} fluid={banner.image.fluid} />
    )}
    <div>test</div>

    {/* <Title>{banner.title}</Title>
    <SubContent>{banner.content}</SubContent>
    <Button>{banner.cta}</Button> */}
    {/* </Content> */}
  </Banner>
)
