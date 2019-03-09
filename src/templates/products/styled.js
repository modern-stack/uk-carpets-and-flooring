import styled from 'styled-components'

const ProductsContainer = styled.div`
  display: flex;
  margin: 0 20px;

  & > div {
    flex: 1;
    &:first-child {
      flex: 0.3;
    }
  }
`

export { ProductsContainer }
