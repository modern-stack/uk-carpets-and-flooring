import React, { useState } from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from 'gatsby-image'
import PriceCalculator from '../../components/PriceCalculator'
import { Primary, Secondary } from '../../components/Button'
import Slider from '../../components/Slider'

import { SiteConsumer } from '../../components/Context/Site'

import Review from './Review'
import Social from '../../components/Social'
import Specification from './Specification'
import Reviews from './Reviews'
import RelatedProducts from './RelatedProducts'

import Breadcrumb from '../../components/Breadcrumb'

import {
  Header,
  FeaturedImage,
  Product,
  Details,
  ImageContainer,
  Price,
  Container,
  Overview,
  Share,
  Link,
  Skus,
  Title,
  SubTitle,
  DescriptionSection,
} from './styled'

export default ({ pageContext }) => {
  const { node, skus } = pageContext

  const [sku, setSku] = useState(skus[0])
  const [total, setTotal] = useState(0)

  return (
    <Layout>
      <SEO title="Products" />
      <Header />

      <Product>
        <div>
          <Breadcrumb
            crumbs={[
              { title: 'Home', link: '/' },
              {
                title: node.productType.name,
                link: `${node.productType.name.toLowerCase()}`,
              },
              { title: node.name, link: '' },
            ]}
          />
        </div>
        <div />
        <div />
        <div />
        <div />

        <FeaturedImage>
          {sku.featuredImage && <Img fluid={sku.featuredImage.fluid} />}
        </FeaturedImage>

        <Skus>
          <Slider>
            {skus.map($ => (
              <ImageContainer
                selected={sku.id === $.id}
                onClick={() => setSku($)}
              >
                {$.featuredImage && <Img fluid={$.featuredImage.fluid} />}
              </ImageContainer>
            ))}
          </Slider>
        </Skus>
        <Details>
          <Container>
            <div>
              <SubTitle>{node.name}</SubTitle>
              <Title>{sku.name}</Title>
              <Overview>
                {`${sku.width} inch. wide  x ${sku.length} inc. Long x ${
                  sku.thickness
                } mm thick`}
              </Overview>
            </div>
            <br />
            <Review />
            <Price>£{(sku.price * total).toFixed(2)}</Price>
            <PriceCalculator type={'metres'} setTotal={setTotal} />
            <SiteConsumer>
              {({ order, updateOrder }) => (
                <Primary
                  onClick={() =>
                    updateOrder({ ...order, items: [...order.items, sku] })
                  }
                >
                  <label>Add to cart</label>
                </Primary>
              )}
            </SiteConsumer>
            <DescriptionSection>
              <SubTitle>Description</SubTitle>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </div>
            </DescriptionSection>
            <Share>
              <Link>Share</Link>
              <Social />
            </Share>
          </Container>
        </Details>
        <div />
        <div />
      </Product>
      <Details>
        <Container>
          <Specification sku={sku} />
          <Reviews />
          <RelatedProducts relatedProducts={sku.relatedProducts} />
        </Container>
      </Details>
    </Layout>
  )
}
