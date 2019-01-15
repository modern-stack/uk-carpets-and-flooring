import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => (
  <Layout>
    <SEO title="Products" />
    <h1>Products</h1>
    {console.log(JSON.stringify(data))}

    {data.allContentfulProduct.edges.map($ => (
      <Link to={`/products/${$.node.name}`}>{$.node.name}</Link>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
