import styled from 'styled-components'

const Header = styled.div`
  min-height: 50px;

  @media (max-width: 700px) {
    min-height: 10px;
  }
`

const Product = styled.div`
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 50px 450px 100px 1fr 50px;
  grid-template-rows: 18px 1fr 20px;
  grid-row-gap: 35px;
  grid-column-gap: 35px;
  background: #f0f0f0;

  @media (max-width: 700px) {
    max-height: 100%;
    display: flex;
    flex-direction: column;
    grid-row-gap: 0;
    grid-column-gap: 0;
  }

  & > div {
    :first-child {
      grid-column: span 2;
    }

    :last-child {
      grid-column: span 5;
    }
  }
`

const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
  border: ${$ => ($.selected ? '2px solid red' : '')};
  opacity: ${$ => ($.selected ? '1' : '0.6')};

  @media (max-width: 700px) {
    width: 60px;
    margin: 0.5em 1em;
  }
`

const Details = styled.div`
  background: white;
  width: 100%;
  padding: 5px 20px;

  @media (max-width: 700px) {
    padding: 0px;
  }
`

const Container = styled.div`
  @media (max-width: 700px) {
    margin: 28px 12px;
  }
`

const FeaturedImage = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`

const Skus = styled.div`
  position: relative;
  margin: 0px 0;
  min-height: 80px;
`

const Price = styled.div`
  display: flex;
  margin: 12px 4px;
  font-weight: 600;
  font-size: 1em;
`

const Overview = styled.div`
  text-transform: uppercase;
  margin: 16px 0;
  font-size: 0.8em;
`

const Share = styled.div`
  display: flex;
  align-items: center;
  margin: 1.2em 0;
`

const Link = styled.div`
  margin: 0px 2px;
`

const Title = styled.h1`
  font-size: 1.2em;
`

const SubTitle = styled.h2`
  font-size: 0.9em;
  margin: 0.4em 0;
`

const DescriptionSection = styled.div`
  margin: 1em 0;
`

export {
  Header,
  FeaturedImage,
  Product,
  Details,
  ImageContainer,
  Container,
  Price,
  Overview,
  Share,
  Link,
  Skus,
  Title,
  SubTitle,
  DescriptionSection,
}
