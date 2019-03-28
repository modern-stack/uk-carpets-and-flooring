import styled from 'styled-components'

const ProductsContainer = styled.div`
  display: flex;
  margin: 0 20px;
  position: relative;

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

const FilterToggle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 60px;
  bottom: 42px;
  right: 0px;
  left: 20px;
  background: lightgray;
  width: 89%;
  height: 35px;
  text-align: center;
`

export { ProductsContainer, FilterToggle }
