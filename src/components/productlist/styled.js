import styled from 'styled-components'

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  grid-column-gap: 50px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
  }
`

const Product = styled.div`
  height: 400px;
`

const ImageContainer = styled.div`
  width: 100%;
`

export { List, Product, ImageContainer }
