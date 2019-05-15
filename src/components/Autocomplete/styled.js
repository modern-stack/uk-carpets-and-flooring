import styled from 'styled-components'

const Autocomplete = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-between;
  flex-direction: column;
`

const Search = styled.div`
  position: relative;
  width: 100%;

  input {
    text-align: center;
    width: 100%;
    height: 30px;
    text-transform: uppercase;
    border: 1px solid black;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    opacity: ${$ => ($.loading ? 1 : 0)};
    position: absolute;
    bottom: 8px;
    right: 1px;
    width: 16px;
    height: 16px;
    animation: spinner 1s infinite;
    animation-timing-function: linear;
  }
`

export { Autocomplete, Search }
