import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PrismicComponents from '../components/Prismic'

import Testimonials from '../components/testimonials'

export default ({ pageContext }) => {
  return (
    <Layout page={pageContext}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <React.Fragment>
        {pageContext.prismicPage.data.body.map($ => {
          const Component = PrismicComponents[$.slice_type]
          return Component ? <Component {...$} /> : null
        })}
        <Testimonials />
      </React.Fragment>
    </Layout>
  )
}
