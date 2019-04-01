import styled from 'styled-components'

const FeetAndInches = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px 1fr;
  padding: 20px 0;
  grid-row-gap: 6px;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  label {
    flex-basis: 30%;
    color: #333;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
  }
`

const Length = styled.input`
  background: #ebeeef;
  min-height: 40px;
  margin: 0 2px;
  border-width: 1px;
  border-style: groove;
  text-indent: 10px;
  width: 100%;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    height: auto;
    opacity: 1;
  }
`

const Width = styled.select`
  height: 100%;
  background: #ebeeef;
  min-height: 40px;
  margin: 0 2px;
  border-width: 1px;
  border-style: groove;
  text-indent: 10px;
`

export { FeetAndInches, Form, Length, Width }
