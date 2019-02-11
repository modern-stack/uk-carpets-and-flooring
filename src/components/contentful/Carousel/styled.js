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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1000;
  width: 30%;
`

const Title = styled.h1`
  color: white;
  font-size: 48px;
`

const SubContent = styled.h2`
  color: white;
`

const Button = styled.button`
  border 2px solid white;
  width: 30%;
  height: 40px;
  margin: 18px 0;

   &:hover {
    background-color: rgb(199, 0, 43, 1);
    color: white;
    border: 1px solid rgb(199, 0, 43, 1);
    cursor: pointer;
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
