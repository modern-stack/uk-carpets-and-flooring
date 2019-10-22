import React from 'react'

import { Notice, Content, CloseButton } from './styled'

export default () => (
  <Notice>
    <Content>
      <h3>Welcome to our new webiste!</h3>
      <p>
        As we are a brand new company we currently have restrictions on how far
        we can deliver.
      </p>
      <p>Currently we only deliver in the North West of Engand</p>

      <p>
        For any special enquries please feel free to contact us on
        <a href="tel:01744 345382"> 01744 345382</a>.
      </p>
    </Content>
    <CloseButton>x</CloseButton>
  </Notice>
)
