import styled from 'styled-components'

const Metres = styled.form`
  display: flex;
  align-items: center;

  label {
    flex-basis: 30%;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    color: #333;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
  }
`

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  background: #f0f0f0;

  & > option {
    background: white;
    :hover: {
      background: red;
    }
  }
`

export { Metres, Select }
