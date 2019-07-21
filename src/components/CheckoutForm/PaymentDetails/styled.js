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
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  & > div {
    :first-child,
    :last-child {
      grid-column: span 2;
    }

    > label {
      font-size: 10px;
      colour: gray;
    }
  }

  .StripeElement {
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    font-size: 1em;
    font-family: 'Source Code Pro', monospace;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: white;
  }

  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }
`

export { Payment, PaymentDetails, Checkout, PaymentForm }
