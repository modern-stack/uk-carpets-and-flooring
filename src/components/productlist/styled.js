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

const Product = styled.div``

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
  margin: 12px 12px;
  position: relative;

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
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`

const Button = styled.button`
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

export { List, Product, ImageContainer, Buttons, Button }
