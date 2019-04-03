import React from 'react'
import { Link } from 'gatsby'
import { Breadcrumb } from './styled'

export default ({ crumbs = [] }) => (
  <Breadcrumb>
    {crumbs.map($ => (
      <li>
        <Link to={$.link}>{$.title}</Link>
      </li>
    ))}
  </Breadcrumb>
)
