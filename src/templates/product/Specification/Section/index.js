import React from 'react'

import { Section, Title, ListItem } from './styled'

export default ({ title, fields, product }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {fields.map(({ title, value }) => {
        return (
          <ListItem>
            <div>{title}</div>
            <div style={{ color: 'gray' }}>{value || 'unknown'}</div>
          </ListItem>
        )
      })}
    </Section>
  )
}
