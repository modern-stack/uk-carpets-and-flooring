import styled from 'styled-components'

const Header = styled.div`
  min-height: 100px;

  @media (max-width: 700px) {
    min-height: 10px;
  }
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
`

const Container = styled.div`
  @media (max-width: 700px) {
    margin: 28px 12px;
  }
`

const Price = styled.div`
  display: flex;
  margin: 4px;
  font-weight: 600;
  font-size: 1.5em;
`

const Overview = styled.div`
  text-transform: uppercase;
  margin: 16px 0;
`

const Share = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin: 0px 10px;
  }
`

const Link = styled.div`
  margin: 0px 10px;
`

export {
  Header,
  MainContent,
  Product,
  Details,
  ImageContainer,
  Container,
  Price,
  Overview,
  Share,
  Link,
}
