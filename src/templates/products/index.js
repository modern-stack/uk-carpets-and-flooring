import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ContentfulComponents from '../../components/contentful'
import ProductList from '../../components/productlist'
import ProductFilter from '../../components/ProductFilter'

import { ProductsContainer } from './styled'

export default ({ pageContext }) => {
  const { skus } = pageContext
  return (
    <Layout>
      <SEO title="Products" />

      {pageContext.contentfulPage.content
        .filter($ => $.internal)
        .map($ => {
          const Component = ContentfulComponents[$.internal.type]
          return Component ? <Component {...$} /> : null
        })}

      <ProductsContainer>
        <ProductFilter />
        <ProductList products={skus} />
      </ProductsContainer>
    </Layout>
  )
}
