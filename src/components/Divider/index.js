import React from 'react'

import { Divider } from './styled'

// export default text => <Divider>{text}</Divider>

export default ({ text }) => (
  <Divider>
    <span>{text}</span>
  </Divider>
)
