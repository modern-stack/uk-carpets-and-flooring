import styled from 'styled-components'

const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 700px) {
    display: flex;
    justify-content: space-around;
  }
`

export { Social }
