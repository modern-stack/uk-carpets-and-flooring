import React from 'react'
import Loadable from 'react-loadable'

import SEO from '../components/seo'

const LoadableComponent = Loadable({
  loader: () => import('../components/layout'),
  loading: () => <div>loading...</div>,
})

const LoadableCarousel = Loadable({
  loader: () => import('../components/Prismic/Carousel'),
  loading: () => <div>loading...</div>,
})

const LoadableBanners = Loadable({
  loader: () => import('../components/Prismic/PrismicBanners'),
  loading: () => <div>loading...</div>,
})

const LoadableTestimonials = Loadable({
  loader: () => import('../components/testimonials'),
  loading: () => <div>loading...</div>,
})

export default ({ pageContext }) => {
  return (
    <LoadableComponent page={pageContext}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <React.Fragment>
        <LoadableCarousel items={pageContext.prismicPage.data.body[0].items} />
        <LoadableBanners items={pageContext.prismicPage.data.body[1].items} />
        {/* <LoadableTestimonials /> */}
      </React.Fragment>
    </LoadableComponent>
  )
}
