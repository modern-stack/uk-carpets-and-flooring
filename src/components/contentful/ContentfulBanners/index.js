import React from 'react'
import { Banners, ContentfulBanners } from './styled'

import Banner from '../../../components/Banner'

export default ({ banners }) => (
  <ContentfulBanners>
    <Banners>
      <Banner banner={banners[0]} />
      <Banner banner={banners[1]} />
      <Banner banner={banners[2]} />
      <Banner banner={banners[3]} />
    </Banners>
  </ContentfulBanners>
)

// export default ({ banners }) => (
//   <Banners>
//     <Banner banner={banners[0]} />
//     <div>
//       <Banner banner={banners[1]} />
//       <Banner banner={banners[2]} />
//     </div>
//     <Banner banner={banners[3]} />
//   </Banners>
// )
