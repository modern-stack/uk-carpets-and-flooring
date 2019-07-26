import styled from 'styled-components'

const Order = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 22px;
  padding-bottom: 30px;
  width: 100%;
`

const SectionTitle = styled.h2``

const Sku = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 20px 0;

  div {
    padding: 2px 20px;
    :first-child {
      padding: 0 0px;
      grid-row: span 2;
    }
  }
`

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
`

const Total = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  div,
  h3 {
    display: flex;
    justify-content: flex-end;
  }
`

const Price = styled.h3`
  margin: 0;
  color: red;
`

const OrderContainer = styled.div`
  display: flex;
  width: 100%;
`

export {
  Order,
  Sku,
  ImageContainer,
  SectionTitle,
  Total,
  Price,
  OrderContainer,
}
