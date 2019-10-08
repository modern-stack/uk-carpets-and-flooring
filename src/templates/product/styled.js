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
  position: relative;

  @media (max-width: 700px) {
    max-height: 100%;
    display: flex;
    flex-direction: column;
    grid-row-gap: 0;
    grid-column-gap: 0;
  }

  & > div {
    :last-child {
      grid-column: span 5;
    }
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  z-index: 1;
  opacity: 0.6;
`

const FeaturedImage = styled.div`
  z-index: 999;
  @media (max-width: 700px) {
    height: 250px;
  }
`

const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
  border: ${$ => ($.selected ? '2px solid red' : '')};

  @media (max-width: 700px) {
    width: 60px;
    margin: 0.5em 1em;
  }
`

const Details = styled.div`
  background: white;
  margin: 5px 20px;
  padding: 5px 20px;
  z-index: 999;

  @media (max-width: 700px) {
    padding: 0px;
    margin: 0px;
  }
`

const Container = styled.div`
  @media (max-width: 700px) {
    margin: 28px 12px;
  }
`

const Skus = styled.div`
  position: relative;
  margin: 0px 0;
  min-height: 80px;
  z-index: 999;
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
  color: gray;
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

const Buttons = styled.div`
  display: flex;
  width: 50%;

  > div {
    margin: 4px;
  }

  @media (max-width: 1200px) {
    justify-content: space-between;
    width: 100%;
  }
`

export {
  Header,
  Product,
  BackgroundImage,
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
  Buttons,
  FeaturedImage,
}
