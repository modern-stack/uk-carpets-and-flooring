import React, { useState } from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from 'gatsby-image'
import PriceCalculator from '../../components/PriceCalculator'
import RelatedProducts from '../../components/Prismic/PrismicRelatedProducts'

import Slider from '../../components/Slider'

import Review from './Review'
import Social from '../../components/Social'
import Specification from './Specification'
import Reviews from './Reviews'

import AddToOrder from './AddToOrder'
import AddToSamples from './AddToSamples'

import Image from '../../components/Image'

import Breadcrumb from '../../components/Breadcrumb'

import {
  Header,
  Product,
  Details,
  ImageContainer,
  Price,
  Container,
  BackgroundImage,
  Share,
  Link,
  Skus,
  Title,
  SubTitle,
  DescriptionSection,
  Buttons,
  FeaturedImage,
} from './styled'
import { notDeepEqual } from 'assert'

export default ({ pageContext }) => {
  const { node, skus } = pageContext

  const [sku, setSku] = useState(skus[0])
  const [total, setTotal] = useState({
    quantity: 1,
    amount: 0,
    description: '',
  })

  if (!sku) return <div>No Skus available</div>

  const { description, featuredimage, name, price } = sku.data

  const priceCalculatorType =
    sku.data.product.document[0].data.product_type === 'Carpets'
      ? 'Metres Squared'
      : 'Single Selection'

  return (
    <Layout>
      <SEO title="Products" />
      <Header />

      <Product>
        <BackgroundImage>
          {sku.data.product.document[0].data.featuredimage && (
            <Image
              fluid={
                sku.data.product.document[0].data.featuredimage.localFile
                  .childImageSharp.fluid
              }
            />
          )}
        </BackgroundImage>
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
          {featuredimage && featuredimage._4_3 && (
            <Image fluid={featuredimage._4_3.localFile.childImageSharp.fluid} />
          )}
        </FeaturedImage>

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
                    fluid={
                      $.data.featuredimage._4_3.localFile.childImageSharp.fluid
                    }
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

              <Title>{`${node.data.name} -  ${name.text} `}</Title>
            </div>
            <br />
            <Review />
            <Price>£{total.amount.toFixed(2)} m²</Price>
            <PriceCalculator
              price={price}
              type={priceCalculatorType}
              onChange={$ => setTotal($)}
            />
            <Buttons>
              <AddToOrder Id={sku.id.split('Prismic__Sku__')[1]} {...total} />
              <div />
              <AddToSamples Id={sku.id.split('Prismic__Sku__')[1]} />
            </Buttons>

            <DescriptionSection>
              <SubTitle>Description</SubTitle>
              <div>{description || 'No description available'}</div>
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

          {sku.data.body && (
            <RelatedProducts relatedproducts={sku.data.body[0]} />
          )}
        </Container>
      </Details>
    </Layout>
  )
}
