import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => (
  <Layout>
    <SEO title="Products" />
    <h1>Products</h1>

    {data.allStripeSku.edges.map($ => (
      <Link to={`/products/${$.node.product.name}`}>{$.node.product.name}</Link>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allStripeSku {
      edges {
        node {
          product {
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
      }
    }
  }
`
