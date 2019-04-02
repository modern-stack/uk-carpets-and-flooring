import React, { useState } from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from 'gatsby-image'
import PriceCalculator from '../../components/PriceCalculator'
import { Primary } from '../../components/Button'

import BasketContext, { BasketConsumer } from '../../components/Context/Basket'

import Slider from './Slider'
import Review from './Review'

import { Header, MainContent, Product, Details, ImageContainer } from './styled'

export default ({ pageContext }) => {
  const { node } = pageContext

  const [sku, setSku] = useState(node.skus[0])
  const [total, setTotal] = useState(0)

  return (
    <Layout>
      <SEO title="Products" />
      <Header />
      <BasketContext>
        <MainContent>
          <Product>
            <ImageContainer>
              {sku.featuredImage && <Img fluid={sku.featuredImage.fluid} />}
            </ImageContainer>
            <Slider node={node} sku={sku} setSku={setSku} />
            <Details>
              <h2>{node.name}</h2>
              <h1>{sku.name}</h1>
              <Review />
              <div>£{(sku.price * total).toFixed(2)}</div>
              <PriceCalculator type={'metres'} setTotal={setTotal} />
              <BasketConsumer>
                {({ basket, setBasket }) => (
                  <div>
                    {console.log(basket)}
                    <Primary
                      selected={!!basket.map($ => $ === sku.id).length}
                      onClick={() => setBasket([...basket, sku.id])}
                    >
                      <label>Add to cart {basket.length}</label>
                    </Primary>
                  </div>
                )}
              </BasketConsumer>
            </Details>
          </Product>
        </MainContent>
      </BasketContext>
    </Layout>
  )
}
