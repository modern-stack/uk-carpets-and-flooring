import React, { useState } from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from 'gatsby-image'
import PriceCalculator from '../../components/PriceCalculator'
import { Primary, Secondary } from '../../components/Button'
import Slider from '../../components/Slider'

import Review from './Review'
import Social from '../../components/Social'
import Specification from './Specification'
import Reviews from './Reviews'
import RelatedProducts from './RelatedProducts'

import Breadcrumb from '../../components/Breadcrumb'

import { Stripe } from '../../Api'

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

  if (!sku) return <div>No Skus available</div>

  return (
    <Layout>
      <SEO title="Products" />
      <Header />

      <Product>
        <div />
        <div>
          <Breadcrumb
            crumbs={[
              { title: 'Home', link: '/' },
              {
                title: node.data.product_type,
                link: `${node.data.product_type.toLowerCase()}`,
              },
              { title: node.data.name, link: '' },
            ]}
          />
        </div>
        <div />

        <div />
        <div />
        <div />

        <FeaturedImage>
          {sku.data.featuredimage && (
            <Img
              fluid={sku.data.featuredimage.localFile.childImageSharp.fluid}
            />
          )}
        </FeaturedImage>

        <Skus>
          <Slider>
            {skus.map($ => (
              <ImageContainer
                selected={sku.id === $.id}
                onClick={() => setSku($)}
              >
                {$.data.featuredimage && (
                  <Img
                    style={{ height: '100%' }}
                    fluid={$.data.featuredimage.localFile.childImageSharp.fluid}
                  />
                )}
              </ImageContainer>
            ))}
          </Slider>
        </Skus>
        <Details>
          <Container>
            <div>
              <SubTitle>{node.data.name.text}</SubTitle>
              <Title>{sku.data.name.text}</Title>
              <Overview>
                {`${sku.width} inch. wide  x ${sku.length} inc. Long x ${
                  sku.thickness
                } mm thick`}
              </Overview>
            </div>
            <br />
            <Review />
            <Price>£{(sku.data.price * total).toFixed(2)}</Price>
            <PriceCalculator type={'metres'} setTotal={setTotal} />
            <Primary onClick={() => {}}>
              <label>Add to Order</label>
            </Primary>

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
