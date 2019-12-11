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
    width: 100%;
    padding: 8px;
    background-color: #ffffff;
    box-shadow: inset 0 1px 2px 0 rgba(201, 202, 200, 0.5);
    border: 1px solid transparent;
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
