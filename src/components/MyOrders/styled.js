import styled from 'styled-components'

const Orders = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Order = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px 60px 60px;
  grid-column: span 4;
  text-align: right;
  column-gap: 30px;
  row-gap: 15px;

  & > div:first-child {
    grid-row: span 2;
    width: 20px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export { Orders, Order }
