import styled from 'styled-components'

const Slider = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 6px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`

export { Slider }
