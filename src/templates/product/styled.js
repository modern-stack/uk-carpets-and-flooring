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

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0px 0px;
  }

  & > div {
    :nth-child(2) {
      flex: 60px;
      flex-grow: 0;

      @media (max-width: 700px) {
        margin: 10px;
        flex: 0;
      }
    }

    flex: 1;
    flex-grow: 1;

    @media (max-width: 700px) {
      margin: 0;
    }
  }
`
const Slider = styled.div`
  text-align: center;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      flex-grow: 100px;
      :nth-child(2) {
        flex-grow: 1;
      }
    }
  }
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
  border: ${$ => ($.selected ? '2px solid red' : '')};
  opacity: ${$ => ($.selected ? '1' : '0.3')};

  @media (max-width: 700px) {
    margin: 0px 2px;
  }
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
