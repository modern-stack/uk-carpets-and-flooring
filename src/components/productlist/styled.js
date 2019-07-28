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

const Buttons = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 99;
  display: none;
`

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 8px 0px;

  @media (max-width: 700px) {
    margin: 12px 0px;
  }

  &:hover {
    ${Buttons} {
      display: flex;
    }
    &:after {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
`

const AdditionaDetails = styled.ul`
  padding-inline-start: 2px;
  font-size: 0.7em;
  text-transform: uppercase;
  list-style-type: none;
  font-family: PlayfairDisplay-Regular;
  color: rgba(102, 102, 102, 255);

  li {
    padding: 8px 0 0 0;
  }

  @media (max-width: 700px) {
    display: none;
  }
`

const Button = styled.button`
  font-family: Gotham-Medium;
  border: 2px solid white;
  width: 80%;
  height: 3em;
  margin: 12px 0;
  padding: 0px;
  background-color: none;
  background-color: Transparent;
  text-align: center;
  color: white;
  z-index: 99;

  &:hover {
    background-color: rgb(199, 0, 43, 1);
    color: white;
    border: 1px solid rgb(199, 0, 43, 1);
    cursor: pointer;
  }
`

export { List, Product, AdditionaDetails, ImageContainer, Buttons, Button }
