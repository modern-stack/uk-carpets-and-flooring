import React from 'react'
import {
  FaAngleUp,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDown,
} from 'react-icons/fa'

import { Conatainer, Slider, IconContainer } from './styled'

export default ({ children, oritentation = 'row' }) => (
  <Conatainer>
    <IconContainer>
      <div>
        <FaAngleUp style={{ width: '60px', fontSize: '35px' }} />
      </div>
      <div>
        <FaAngleLeft style={{ width: '60px', fontSize: '35px' }} />
      </div>
    </IconContainer>
    <Slider oritentation={oritentation}>{children}</Slider>
    <IconContainer>
      <div>
        <FaAngleDown style={{ width: '60px', fontSize: '35px' }} />
      </div>
      <div>
        <FaAngleRight style={{ width: '60px', fontSize: '35px' }} />
      </div>
    </IconContainer>
  </Conatainer>
)
