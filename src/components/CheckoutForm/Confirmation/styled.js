import styled from 'styled-components'

export const Confirmation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.div`
  min-height: 50px;

  @media (max-width: 700px) {
    min-height: 10px;
  }
`
