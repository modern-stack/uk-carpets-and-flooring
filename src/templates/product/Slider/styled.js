import styled from 'styled-components'

const Slide = styled.div`
  position: relative;
  margin: 2px 0px;
  height: 60px;
  border: ${$ => ($.selected ? '2px solid red' : '')};
  opacity: ${$ => ($.selected ? '1' : '0.3')};

  @media (max-width: 700px) {
    margin: 0px 2px;
    height: 80px;
  }
`

const Slider = styled.div`
  text-align: center;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    > div {
      height: 100%;
      flex-grow: 60px;
      :nth-child(2) {
        flex-grow: 1;
      }
    }
  }
`

const SliderImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export { Slider, Slide, SliderImage }
