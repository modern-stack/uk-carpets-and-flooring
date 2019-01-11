import React, { useState, useEffect, useReducer } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Products" />
      <div>{JSON.stringify(data)}</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Product($id: String!) {
    stripeProduct(id: { eq: $id }) {
      id
      name
      skus {
        object
        has_more
        total_count
        url
      }
    }
  }
`
