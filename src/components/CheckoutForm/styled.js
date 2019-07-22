import styled from 'styled-components'

const Checkout = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  overflow: scroll;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 4px;
  justify-content: space-between;

  > div {
    width: 100%;
    margin: 0 40px;

    @media (max-width: 700px) {
      :last-child {
        display: none;
      }
    }
  }
`

const Subtitle = styled.div`
  text-transform: uppercase;
  padding-bottom: 4px;
  border-bottom: 1px gray solid;
  color: gray;
  font-size: 0.8em;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
`

export { Checkout, Content, Subtitle }
