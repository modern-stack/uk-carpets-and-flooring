import styled from 'styled-components'

const Payment = styled.div`
  display: flex;
  width: 100%;
`

const PaymentDetails = styled.div`
  width: 100%;
`

const Checkout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;
  width: 100%;
`

export { Payment, PaymentDetails, Checkout }
