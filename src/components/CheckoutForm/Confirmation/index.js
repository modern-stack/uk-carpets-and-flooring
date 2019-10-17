import React, { useState, useEffect } from 'react'
import Layout from '../../layout'
import SEO from '../../seo'

import { Confirmation, Header } from './styled'

export default () => (
  <React.Fragment>
    <Confirmation>
      <div>
        <h1>Thankyou for your Order!</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <a href="/">Go Back to Site</a>
      </div>
    </Confirmation>
  </React.Fragment>
)
