import styled from 'styled-components'

const ProductContainer = styled.div`
  display: flex;
  width: 100%;

  & > div {
    :first-child {
      flex: 0.3;
    }
    flex: 1;
  }
`

export { ProductContainer }
