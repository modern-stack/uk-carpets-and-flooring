import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

import { Carousel, DesktopContainer, MobileContainer } from './styled'

export default ({ slides }) => (
  <Carousel>
    <DesktopContainer>
      <Desktop slides={slides} />
    </DesktopContainer>

    <MobileContainer>
      <Mobile slides={slides} />
    </MobileContainer>
  </Carousel>
)
