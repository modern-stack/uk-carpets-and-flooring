import styled from 'styled-components'
import { FaSpinner } from 'react-icons/fa'

const Spinner = styled(FaSpinner)`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  animation: spinner 1.5s infinite;
  animation-timing-function: linear;
`

export { Spinner }
