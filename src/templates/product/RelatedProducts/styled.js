import styled from 'styled-components'

const RelatedProducts = styled.div`
  position: relative;
`

const Product = styled.div`
  width: 100%;
`

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  grid-column-gap: 6px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
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

export { RelatedProducts, Product, Products, Collection, SubTitle }
