import React, { useState } from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from 'gatsby-image'
import PriceCalculator from '../../components/PriceCalculator'

import Slider from '../../components/Slider'

import Review from './Review'
import Social from '../../components/Social'
import Specification from './Specification'
import Reviews from './Reviews'
import RelatedProducts from '../../components/Prismic/PrismicRelatedProducts'
import AddToOrder from './AddToOrder'

import Image from '../../components/Image'

import Breadcrumb from '../../components/Breadcrumb'

import {
  Header,
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

  const { featuredimage, name, price, width, length, thickness } = sku.data

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

        {featuredimage && featuredimage._4_3 && (
          <Image fluid={featuredimage._4_3.localFile.childImageSharp.fluid} />
        )}

        <Skus>
          <Slider>
            {skus.map($ => (
              <ImageContainer
                selected={sku.id === $.id}
                onClick={() => setSku($)}
              >
                {$.data.featuredimage && $.data.featuredimage._4_3 && (
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

              <Title>
                {`${name.text} - 
                ${node.data.name}`}
              </Title>
              <Overview>
                {`${width} inch. wide  x ${length} inc. Long x ${thickness} mm thick`}
              </Overview>
            </div>
            <br />
            <Review />
            <Price>£{(price * total).toFixed(2)}</Price>
            <PriceCalculator type={'metres'} setTotal={setTotal} />
            <AddToOrder Id={sku.id.split('Prismic__Sku__')[1]} />

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
          <Specification product={node.data} sku={sku} />
          <Reviews />

          {sku.data.body.map($ => {
            console.log('mapping >>>>', $)
            return <RelatedProducts relatedproducts={{ ...$ }} />
          })}
        </Container>
      </Details>
    </Layout>
  )
}
