import React from 'react'
import { Specification, Content } from './styled'

import Title from '../../../components/Title'
import Section from './Section'

export default ({ sku }) => (
  <Specification>
    <Title title={'Item Specifications'} />
    <Content>
      <Section
        title={'General'}
        fields={['name', 'design', 'color', 'look', 'species', 'gloss', 'edge']}
        product={sku}
      />
      <div />
      <div>
        <Section
          title={'Dimensions'}
          fields={['size', 'squarefeet']}
          product={sku}
        />
        <Section
          title={'Warranty'}
          fields={['size', 'squarefeet']}
          product={sku}
        />
      </div>
    </Content>
  </Specification>
)
