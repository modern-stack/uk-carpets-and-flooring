import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  console.log('Data >>>>>>')

  const { contentfulProduct } = data
  return (
    <Layout>
      <SEO title="Products" />
      <div>{contentfulProduct.name}</div>
    </Layout>
  )
}
