import styled from 'styled-components'

const Sku = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr;
  align-items: center;
  grid-column-gap: 0px;

  border-bottom: 1px solid lightgray;
  padding: 20px 0;

  div {
    padding: 2px 20px;
    :first-child {
      padding: 0 0px;
      grid-row: span 2;
    }

    :nth-child(3) {
      display: flex;
      justify-content: center;
      padding: 0;
    }

    :nth-child(4) {
      display: flex;
      justify-content: flex-end;
      padding: 0;
    }
  }

  h2 {
    color: grey;
    font-size: 0.6em;
    margin: 0;
    text-transform: uppercase;
  }

  .title {
    font-family: Gotham-Bold, ﻿AdobeInvisFont, ﻿MyriadPro-Regular;
    font-weight: bold;
    color: rgba(51, 51, 51, 255);
    text-align: left;
    padding: 0;
  }

  input {
    margin: 2px;
    width: 21px;
    text-align: center;
    border: 1px solid black;
    background: white;
    -moz-appearance: textfield;
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    :focus {
      background: #c7002b;
      color: white;
    }
  }
`

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
`

const Total = styled.div`
  margin: 26px 0;

  & > div {
    display: flex;
    margin: 8px 0;
    justify-content: space-between;
  }
`

export { Sku, ImageContainer, Total }
