import styled from 'styled-components'

const Header = styled.div`
  min-height: 100px;
`

const MainContent = styled.div`
  background: #f0f0f0;

  @media (max-width: 700px) {
    padding: 10px;
  }
`

const Product = styled.div`
  display: inline-flex;
  padding: 60px 0px;
  width: 100%;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0px 0px;
  }

  & > div {
    margin: 0 8%;
    flex: 1;
    flex-grow: 1;

    @media (max-width: 700px) {
      margin: 10px 0;
    }

    :nth-child(2) {
      margin: 0%;
      flex: 60px;
      flex-grow: 0;

      @media (max-width: 700px) {
        margin: 10px;
        flex: 0;
      }
    }
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 700px) {
    margin: 6px;
  }
`

const Details = styled.div`
  background: white;
  width: 100%;
  /* padding: 0 20px; */
`

export { Header, MainContent, Product, Details, ImageContainer }
