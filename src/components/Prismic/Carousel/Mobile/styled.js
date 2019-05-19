import styled from 'styled-components'

const Carousel = styled.div`
  position: relative;
  display: block;
  height: 100%;
`

const Slide = styled.div`
  display: block;
  height: 100%;
`

const SlideSelection = styled.div`
  display: flex;
  position: absolute;
  bottom: 10%;
  width: 100%;
  justify-content: center;
`

const SlideSelector = styled.div`
  width: 30px;
  height: 5px;
  margin: 0 4px;
  background-color: ${props =>
    props.selected ? 'rgb(199, 0, 43, 1)' : 'white'};

  cursor: ${$ => ($.selected ? 'cursor' : 'pointer')};
  z-index: 1;
  transition: color 1s ease-in;
`

export { Carousel, Slide, SlideSelection, SlideSelector }
