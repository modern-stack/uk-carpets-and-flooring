import styled from 'styled-components'

const CarouselContainer = styled.div`
  position: relative;
  height: 100%;
`

const Slide = styled.div`
  position: relative;
  overflow: hidden;
  height: ${props => (props.visible ? '80vh' : 0)};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 1s ease-in;
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

  transition: color 1s ease-in;
`

export { CarouselContainer, Slide, SlideSelection, SlideSelector }
