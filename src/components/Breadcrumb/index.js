import React from 'react'
import { Breadcrumb } from './styled'

export default ({ crumbs = [] }) => (
  <Breadcrumb>
    {crumbs.map($ => (
      <div>{$}</div>
    ))}
  </Breadcrumb>
)
