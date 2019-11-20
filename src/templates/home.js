import React from 'react'
import Loadable from 'react-loadable'
import ContentLoader from 'react-content-loader'

const LoadableSEO = Loadable({
  loader: () => import('../components/seo'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="red"
      secondaryColor="#ecebeb"
      style={{ height: '10vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

const LoadableComponent = Loadable({
  loader: () => import('../components/layout'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="red"
      secondaryColor="#ecebeb"
      style={{ height: '10vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

const LoadableCarousel = Loadable({
  loader: () => import('../components/Prismic/Carousel'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="red"
      secondaryColor="#ecebeb"
      style={{ height: '10vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

const LoadableBanners = Loadable({
  loader: () => import('../components/Prismic/PrismicBanners'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="red"
      secondaryColor="#ecebeb"
      style={{ height: '10vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

const LoadableTestimonials = Loadable({
  loader: () => import('../components/testimonials'),
  loading: () => <div />,
})

export default ({ pageContext }) => {
  return (
    <LoadableComponent page={pageContext}>
      <LoadableSEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <React.Fragment>
        <LoadableCarousel items={pageContext.prismicPage.data.body[0].items} />
        <LoadableBanners items={pageContext.prismicPage.data.body[1].items} />
        <LoadableTestimonials />
      </React.Fragment>
    </LoadableComponent>
  )
}
