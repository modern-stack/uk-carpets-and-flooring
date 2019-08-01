import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

import { Carousel, DesktopContainer, MobileContainer } from './styled'

export default ({ items }) => (
  <Carousel>
    <DesktopContainer>
      <Desktop slides={items} />
    </DesktopContainer>

    <MobileContainer>
      <Mobile slides={items} />
    </MobileContainer>
  </Carousel>
)
