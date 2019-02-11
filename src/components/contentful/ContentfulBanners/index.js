import React from 'react'
import { Banners } from './styled'

import Banner from '../../../components/Banner'

export default ({ banners }) => (
  <Banners>
    {banners.map($ => (
      <Banner banner={$} />
    ))}
  </Banners>
)
