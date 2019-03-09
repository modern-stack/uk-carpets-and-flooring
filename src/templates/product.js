import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Products" />
      <div>{pageContext.name}</div>
    </Layout>
  )
}
