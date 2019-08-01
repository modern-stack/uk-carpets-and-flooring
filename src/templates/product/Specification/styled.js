import styled from 'styled-components'

const Specification = styled.div`
  margin: 0px 12px;
`

const Content = styled.div`
  display: flex;
  > div {
    flex-grow: 1;
    :nth-child(2) {
      flex-grow: 0;
      width: 150px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    flex: 1 1 1;
    width: 100%;
  }
`

const Icons = styled.div`
  display: flex;
  margin: 33px 0px;
`

export { Specification, Content, Icons }
