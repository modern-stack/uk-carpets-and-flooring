import styled from 'styled-components'

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow: hidden;
  grid-column-gap: 50px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
  }
`

const Product = styled.div``

const ImageContainer = styled.div`
  width: 100%;
  margin: 12px 12px;
  position: relative;

  & > div {
    :hover {
      &:after {
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justifycontent: center;
  align-items: center;
`

export { List, Product, ImageContainer, Buttons }
