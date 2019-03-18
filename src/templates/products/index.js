import React, { useState } from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ContentfulComponents from '../../components/contentful'
import ProductList from '../../components/productlist'
import ProductFilter from '../../components/ProductFilter'

import { ProductsContainer } from './styled'

export default ({ pageContext }) => {
  const { skus, filters } = pageContext

  const [selected, setSelected] = useState({
    colours: [],
  })

  const filtered = skus.filter($ => selected.colours.includes($.colour))

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
        <ProductFilter
          filters={filters}
          selected={selected}
          setSelected={setSelected}
        />
        <ProductList products={filtered} />
      </ProductsContainer>
    </Layout>
  )
}
