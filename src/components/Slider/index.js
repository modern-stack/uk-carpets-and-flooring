import React from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

import { Conatainer, Slider } from './styled'

export default ({ children, oritentation = 'row', hasArrows }) => (
  <Conatainer>
    <FaAngleUp style={{ width: '60px', fontSize: '35px' }} />
    <Slider oritentation={oritentation}>{children}</Slider>
    <FaAngleDown style={{ width: '60px', fontSize: '35px' }} />
  </Conatainer>
)
