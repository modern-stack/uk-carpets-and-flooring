import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from 'gatsby-image'

import { Header, MainContent, Product } from './styled'

export default ({ pageContext }) => {
  const { node } = pageContext
  return (
    <Layout>
      <SEO title="Products" />
      <Header />
      <MainContent>
        <Product>
          <div>
            <Img fluid={node.featuredImage.fluid} />
          </div>
          <div>selection</div>
          <div>Details</div>
        </Product>
      </MainContent>
    </Layout>
  )
}
