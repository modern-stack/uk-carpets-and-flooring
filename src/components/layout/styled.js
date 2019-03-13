import styled from 'styled-components'

const Page = styled.div`
  position: relative;
`

const Content = styled.div`
  position: relative;
  margin-top: -60px;

  @media (max-width: 700px) {
    margin-top: 0px;
  }
`

export { Page, Content }
