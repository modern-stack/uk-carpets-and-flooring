import React from 'react'

import { Section, Title, ListItem } from './styled'

export default ({ title, fields, product }) => (
  <Section>
    {console.log('>>>>', Object.keys(product))}
    <Title>{title}</Title>
    {[...fields].map($ => (
      <ListItem>
        <div>{$}</div>
        <div>{product[$] || 'unknown'}</div>
      </ListItem>
    ))}
  </Section>
)
