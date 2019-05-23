import React from 'react'
import { Banners, ContentfulBanners } from './styled'

import Banner from '../../Banner'

export default ({ items, primary }) => (
  <ContentfulBanners>
    <Banners>
      {items.map($ => (
        <Banner banner={$} />
      ))}
    </Banners>
  </ContentfulBanners>
)
