import styled from 'styled-components'

const Payment = styled.div`
  display: flex;
  width: 100%;
`

const PaymentDetails = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-row-gap: 18px;
  grid-column-gap: 36px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

const Checkout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;
  width: 100%;
`

export { Payment, PaymentDetails, Checkout }
