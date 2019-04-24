import Img from 'gatsby-image'
import styled from 'styled-components'

const RelatedProducts = styled.div`
  display: block;
`

const Product = styled.div``

const ImageContainer = styled(Img)`
  height: 200px;

  @media (max-width: 700px) {
    height: 65px;
  }
`

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  grid-template-rows: 100px;
  grid-column-gap: 6px;
  min-height: 150px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2 auto-fit, 1fr);
    grid-auto-flow: column;
  }
`

const Collection = styled.div`
  font-size: 0.6em;
  margin: 6px 0;
`

const SubTitle = styled.div`
  font-size: 0.8em;
  margin: 6px 0;
`

export {
  RelatedProducts,
  Product,
  Products,
  Collection,
  ImageContainer,
  SubTitle,
}
