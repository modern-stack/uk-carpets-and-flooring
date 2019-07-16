import React, { useState } from 'react'
import { useSwipeable, Swipeable } from 'react-swipeable'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PrismicComponents from '../../components/Prismic'
import ProductList from '../../components/productlist'
import ProductFilter from '../../components/ProductFilter'

import { ProductsContainer, FilterToggle } from './styled'

export default ({ pageContext }) => {
  const { skus } = pageContext

  const [showFilter, toggleShowFilter] = useState(false)

  return (
    <Layout>
      <SEO title="Products" />

      {pageContext.prismicPage.data.body
        .filter($ => $.slice_type)
        .map($ => {
          const Component = PrismicComponents[$.slice_type]
          return Component ? <Component {...$} /> : null
        })}
      <ProductsContainer>
        {/* <ProductFilter
          open={showFilter}
          filters={[]}
          selected={false}
          // setSelected={}
          visible={showFilter}
        /> */}
        <ProductList products={skus} />

        {/* <FilterToggle>
          <Swipeable onSwiped={() => toggleShowFilter(!showFilter)}>
            Filter
          </Swipeable>
        </FilterToggle> */}
      </ProductsContainer>
    </Layout>
  )
}
