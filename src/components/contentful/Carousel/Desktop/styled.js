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

  &:after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.2);
  }
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-25%, -50%);
  color: white;
  z-index: 9998;
  width: 1.5em;
`

const Title = styled.h1`
  color: white;
  width: 1em;
`

const SubContent = styled.h2`
  color: white;
`

const Button = styled.button`
  width: 50%;
  height: 40px;
  color: white;
  background-color: rgb(199, 0, 43, 0.9);
  border: 0;
  margin: 30px 0;

  &:hover {
    cursor: pointer;
    background-color: rgb(199, 0, 43, 1);
  }
`

export {
  CarouselContainer,
  Slide,
  SlideSelection,
  SlideSelector,
  Content,
  Title,
  SubContent,
  Button,
}
