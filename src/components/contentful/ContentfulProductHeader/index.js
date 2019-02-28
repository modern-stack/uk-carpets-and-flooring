import React from 'react'

import { ProductHeader, Title, SubTitle } from './styled'
import InnerContent from '../../layout/innercontent'

export default ({ title, subTitle }) => (
  <InnerContent>
    <ProductHeader>
      <Title>
        <span>{title}</span>
      </Title>
      <SubTitle>
        <div />
        <div>{subTitle}</div>
        <div />
      </SubTitle>
    </ProductHeader>
  </InnerContent>
)
