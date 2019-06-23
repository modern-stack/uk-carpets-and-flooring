import styled from 'styled-components'

const Checkout = styled.div`
  display: flex;
  width: 100%;
`

const PaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    margin: 12px 0px;
  }
`

const Payment = styled.div`
  display: flex;
  width: 100%;
`

export { Payment, PaymentDetails, Checkout }
