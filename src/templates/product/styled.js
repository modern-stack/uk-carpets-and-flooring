import styled from 'styled-components'

const Header = styled.div`
  min-height: 100px;
`

const MainContent = styled.div`
  background: #f0f0f0;
`

const Product = styled.div`
  display: flex;
  padding: 60px 0px;

  max-height: 500px;
  width: 100%;

  & > div {
    :nth-child(2) {
      flex: 60px;
      flex-grow: 0;
    }

    flex: 1;
    flex-grow: 1;
    margin: 0px 4%;
  }
`
const Slider = styled.div`
  text-align: center;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`

const SliderImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Details = styled.div`
  background: white;
  padding: 0 20px;
`

const Slide = styled.div`
  position: relative;
  margin: 2px 0px;
  height: 60px;
`

export {
  Header,
  MainContent,
  Product,
  Details,
  Slider,
  ImageContainer,
  Slide,
  SliderImage,
}
