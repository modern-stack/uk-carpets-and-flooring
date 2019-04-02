import React, { useState } from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from 'gatsby-image'
import PriceCalculator from '../../components/PriceCalculator'
import { Primary, Secondary } from '../../components/Button'

import { SiteConsumer } from '../../components/Context/Site'

import Slider from './Slider'
import Review from './Review'
import Social from '../../components/Social'

import {
  Header,
  MainContent,
  Product,
  Details,
  ImageContainer,
  Price,
  Container,
  Overview,
  Share,
  Link,
} from './styled'

export default ({ pageContext }) => {
  const { node } = pageContext

  const [sku, setSku] = useState(node.skus[0])
  const [total, setTotal] = useState(0)

  const addedToBasket = (basket, sku) => {
    return !basket.filter($ => $ === sku.id).length
  }

  return (
    <Layout>
      <SEO title="Products" />

      <Header />

      <MainContent>
        <Product>
          <ImageContainer>
            {sku.featuredImage && <Img fluid={sku.featuredImage.fluid} />}
          </ImageContainer>
          <Slider node={node} sku={sku} setSku={setSku} />
          <Details>
            <Container>
              <div>
                <h2>{node.name}</h2>
                <h1>{sku.name}</h1>
                <Overview>
                  7.19 Inch. WIDE x 4.765. Long X 12 Meres Thick, Low Glosss
                </Overview>
              </div>
              <Review />
              <Price>£{(sku.price * total).toFixed(2)}</Price>
              <PriceCalculator type={'metres'} setTotal={setTotal} />
              <SiteConsumer>
                {({ basket, setBasket }) =>
                  addedToBasket(basket, sku) ? (
                    <Primary onClick={() => setBasket([...basket, sku.id])}>
                      <label>Add to cart</label>
                    </Primary>
                  ) : (
                    <Secondary onClick={() => setBasket([...basket, sku.id])}>
                      <label>View Basket</label>
                    </Secondary>
                  )
                }
              </SiteConsumer>
              <h2>Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Share>
                <Link>Share</Link>
                <Social />
              </Share>
            </Container>
          </Details>
        </Product>
      </MainContent>
    </Layout>
  )
}
