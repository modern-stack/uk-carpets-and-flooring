import React, { useState } from 'react'
import { useSwipeable, Swipeable } from 'react-swipeable'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ContentfulComponents from '../../components/contentful'
import ProductList from '../../components/productlist'
import ProductFilter from '../../components/ProductFilter'

import { ProductsContainer, FilterToggle } from './styled'

export default ({ pageContext }) => {
  const { skus, filters } = pageContext

  const [selected, setSelected] = useState({
    colours: Array.from(
      new Set(skus.filter($ => !!$.colour).map($ => $.colour))
    ),
    collection: Array.from(new Set(skus.map($ => $.product.name))),
  })

  const [showFilter, toggleShowFilter] = useState(false)

  const filtered = skus.filter(
    $ =>
      selected.colours.includes($.colour) ||
      selected.collection.includes($.product.name)
  )

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
          visible={showFilter}
        />
        <ProductList products={filtered} />

        <FilterToggle>
          <Swipeable onSwiped={() => console.log('Swiped up!')}>
            Filter
          </Swipeable>
        </FilterToggle>
      </ProductsContainer>
    </Layout>
  )
}
