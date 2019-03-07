import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import ProductList from '../components/productlist'
import SEO from '../components/seo'
import ContentfulComponents from '../components/contentful'
import InstagramFeed from '../components/instagram'
import InnerContent from '../components/layout/innercontent'
import ProductContainer from '../components/layout/productcontainer'

const renderContentfulComponents = contentfulPage => {
  if (!contentfulPage) return null

  return contentfulPage.content.map($ => {
    console.log('rendering >>>>', $.__typename, $)
    const Component = ContentfulComponents[$.__typename]
    return Component ? <Component {...$} /> : null
  })
}

export default ({ data }) => {
  console.log('>>>>>>', data)
  const { allInstagramContent, contentfulPage, allContentfulProduct } = data

  console.log('products >>>>', allContentfulProduct)

  return (
    <Layout>
      <SEO title="Carpets" keywords={[`gatsby`, `application`, `react`]} />
      <React.Fragment>
        {renderContentfulComponents(contentfulPage)}

        <InnerContent>
          <ProductContainer>
            <div>This is the search</div>
            <ProductList products={allContentfulProduct.edges} />
          </ProductContainer>
        </InnerContent>

        <Testimonials />
        <InstagramFeed feed={allInstagramContent} />
      </React.Fragment>
    </Layout>
  )
}
