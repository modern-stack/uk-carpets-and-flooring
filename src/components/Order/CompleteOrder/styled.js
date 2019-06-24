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
`

const Payment = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
`

const PaymentForm = styled.div`
  width: 100%;
`

export { Payment, PaymentDetails, Checkout, PaymentForm }
