import styled from 'styled-components'

const Cart = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  & > label {
    margin: 0 12px;

    @media (max-width: 700px) {
      display: none;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`

const Total = styled.label`
  color: red;
`

const Icon = styled.div`
  posiition: relative;
  border-radius: 50%;
  color: gray;
  background: #ebebeb;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: '${$ => $.value}';
    position: absolute;
    font-size: 12px;
    background-color: #c5002c;
    width: 14px;
    height: 14px;
    color: #fff;
    top: 14px;
    right: 70px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }

  @media (min-width: 700px) {
    display: none;
  }
`

export { Cart, Total, Icon }
