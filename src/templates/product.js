import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ pathContext }) => {
  const { name } = pathContext
  return (
    <Layout>
      <SEO title="Products" />
      <h1>{name}</h1>
    </Layout>
  )
}
