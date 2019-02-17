import React from 'react'
import { Banners, ContentfulBanners } from './styled'

import Banner from '../../../components/Banner'

export default ({ banners }) => (
  <ContentfulBanners>
    <Banners>
      {banners.map($ => (
        <Banner banner={$} />
      ))}
    </Banners>
  </ContentfulBanners>
)
