import React, { useState, useEffect, useReducer } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from 'gatsby-image'

export default ({ data }) => {
  const { contentfulProduct } = data
  return (
    <Layout>
      <SEO title="Products" />
      <div>{contentfulProduct.name}</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Product($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      id
      name
      featuredImage {
        file {
          url
        }
      }
    }
  }
`
