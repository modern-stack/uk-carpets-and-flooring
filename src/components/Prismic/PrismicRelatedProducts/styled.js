import Img from 'gatsby-image'
import styled from 'styled-components'

const RelatedProducts = styled.div`
  display: block;
`

const Product = styled.div``

const ImageContainer = styled(Img)``

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  min-height: 800px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2 auto-fit, 1fr);
    grid-auto-flow: column;
  }
`

const Collection = styled.div`
  color: grey;
  font-size: 0.6em;
  margin: 0.2em 0;
  text-transform: uppercase;
  margin: 6px 0;
`

const SubTitle = styled.div`
  font-size: em;
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
