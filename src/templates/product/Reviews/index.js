import React from 'react'
import { Specification } from './styled'

import Title from '../../../components/Title'
import { Primary } from '../../../components/Button'

export default ({ sku }) => (
  <Specification>
    <Title title={'Customer Reviews'} />
    <h3>Questions and Answers</h3>
    <Primary>Ask a Question</Primary>
  </Specification>
)
