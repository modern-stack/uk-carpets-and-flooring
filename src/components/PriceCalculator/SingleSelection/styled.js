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
  min-height: 30px;
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

const Selection = styled.input`
  padding: 10px;
  background: #f0f0f0;
`
const Label = styled.label`
  font-weight: 800;
  font-size: 0.9em;
  margin: 0.4em 0;
`

export { FeetAndInches, Form, Length, Selection, Label }
