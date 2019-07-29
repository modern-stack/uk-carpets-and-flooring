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

const Product = styled.div`
  position: relative;

  h2 {
    color: grey;
    font-size: 0.6em;
    margin: 0.2em 0;
    text-transform: uppercase;
  }

  .title {
    font-family: Gotham-Bold, ﻿AdobeInvisFont, ﻿MyriadPro-Regular;
    font-weight: bold;
    color: rgba(51, 51, 51, 255);
    text-align: left;
  }

  .price {
    font-family: Gotham-Bold;
    margin: 12px 0 0 0;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 8px 0px;
  cursor: pointer;

  @media (max-width: 700px) {
    margin: 12px 0px;
  }

  &:hover {
    &:after {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: black;
      opacity: 0.2;
    }
  }
`

export { List, Product, ImageContainer }
