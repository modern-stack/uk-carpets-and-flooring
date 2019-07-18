import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ pageContext }) => {
  return (
    <Layout page={pageContext}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>hi!</div>
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
