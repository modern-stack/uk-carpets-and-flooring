import React from 'react'
import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import SEO from '../components/seo'
import ContentfulComponents from '../components/contentful'
import InstagramFeed from '../components/instagram'

export default ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <React.Fragment>
      {data.contentfulPage.content.map($ => {
        const Component = ContentfulComponents[$.__typename]
        return Component ? <Component {...$} /> : null
      })}
      <Testimonials />
      <InstagramFeed feed={data.allInstagramContent} />
    </React.Fragment>
  </Layout>
)
