import React from 'react'
import Link from 'gatsby-link'

import { Navigation } from './styled'

export default () => (
  <Navigation>
    <div>
      <Link to={`/`}>Back to site</Link>
    </div>

    <div>
      <Link to={`/`}>Checkout</Link>
    </div>

    <div>
      <Link to={`/`}>Confirmation</Link>
    </div>
  </Navigation>
)
