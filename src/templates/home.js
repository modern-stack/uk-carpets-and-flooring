import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PrismicCarousel, PrismicBanners } from '../components/Prismic'

import Testimonials from '../components/testimonials'
import Carousel from '../components/Prismic/Carousel'

export default ({ pageContext }) => {
  const [carouselProps, bannersprops] = pageContext.prismicPage.data.body
  return (
    <Layout page={pageContext}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <PrismicCarousel {...carouselProps} />
      <PrismicBanners {...bannersprops} />

      {/* <React.Fragment>
        {pageContext.prismicPage.data.body.map($ => {
          const Component = PrismicComponents[$.slice_type]
          return Component ? <Component {...$} /> : null
        })}
        <Testimonials />
      </React.Fragment> */}
    </Layout>
  )
}
