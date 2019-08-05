import styled from 'styled-components'

const Carousel = styled.div`
  position: relative;
  display: block;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-25%, -50%);
  color: white;
  z-index: 9998;
  width: 60%;
`

const Title = styled.h1`
  color: white;
  font-size: 36px;
  width: 80%;
`

const SubContent = styled.h2`
  font-size: 22px;
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.2);
  z-index: 1;
`

export {
  Carousel,
  Slide,
  SlideSelection,
  SlideSelector,
  Content,
  Title,
  SubContent,
  Button,
  Overlay,
}
