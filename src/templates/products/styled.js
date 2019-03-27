import styled from 'styled-components'

const ProductsContainer = styled.div`
  display: flex;
  margin: 0 20px;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  & > div {
    flex: 1;
    &:first-child {
      flex: 0.3;
    }
  }
`

export { ProductsContainer }
