import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Carousel from '../components/Prismic/Carousel'
import Banners from '../components/Prismic/PrismicBanners'
import Testimonials from '../components/testimonials'

export default ({ pageContext }) => {
  return (
    <Layout page={pageContext}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <React.Fragment>
        <Carousel items={pageContext.prismicPage.data.body[0].items} />
        <Banners items={pageContext.prismicPage.data.body[1].items} />
        <Testimonials />
      </React.Fragment>
    </Layout>
  )
}
