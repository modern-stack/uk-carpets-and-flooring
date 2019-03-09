import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContentfulComponents from '../components/contentful'

export default ({ pageContext }) => {
  console.log('Data >>>>>>', pageContext)
  return (
    <Layout page={pageContext}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <React.Fragment>
        {pageContext.contentfulPage.content
          .filter($ => $.internal)
          .map($ => {
            const Component = ContentfulComponents[$.internal.type]
            return Component ? <Component {...$} /> : null
          })}
      </React.Fragment>
    </Layout>
  )
}
