import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContentfulComponents from '../components/contentful'

import Testimonials from '../components/testimonials'

export default ({ pageContext }) => {
  return (
    <Layout page={pageContext}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <React.Fragment>
        {/* {pageContext.contentfulPage.content
          .filter($ => $.internal)
          .map($ => {
            const Component = ContentfulComponents[$.internal.type]
            return Component ? <Component {...$} /> : null
          })} */}
        <Testimonials />
      </React.Fragment>
    </Layout>
  )
}
