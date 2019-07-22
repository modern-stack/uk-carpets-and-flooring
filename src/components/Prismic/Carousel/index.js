import React from 'react'
import Desktop from './Desktop'

import { Carousel, DesktopContainer } from './styled'

export default ({ items }) => (
  <Carousel>
    <DesktopContainer>
      <Desktop slides={items} />
    </DesktopContainer>

    {/* <MobileContainer>
      <Mobile slides={items} />
    </MobileContainer> */}
  </Carousel>
)
