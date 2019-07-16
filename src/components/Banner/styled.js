import styled from 'styled-components'

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: ${$ => $.maxHeight};

  :hover {
    &:after {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: ${$ => $.yAlign || 'center'};
  align-items: ${$ => $.xAlign || 'flex-start'};
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  z-index: 9998;

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`

const Content = styled.div`
  text-align: ${$ => $.textalign || 'flex-start'};
  width: 60%;

  @media (max-width: 700px) {
    text-align: center;
  }
`

const Title = styled.h1`
  color: white;
  font-size: 12px;

  :empty {
    display: none;
  }
`

const SubContent = styled.h2`
  color: white;
  font-size: 28px;
`

const Button = styled.button`
  border: 2px solid white;
  width: 60%;
  height: 3em;
  margin: 18px 0;
  padding: 0px;
  background-color: none;
  background-color: Transparent;
  text-align: center;
  color: white;

  @media (max-width: 700px) {
    background-color: rgb(199, 0, 43, 1);
    color: white;
    border: 1px solid rgb(199, 0, 43, 1);
    cursor: pointer;
  }

  &:hover {
    background-color: rgb(199, 0, 43, 1);
    color: white;
    border: 1px solid rgb(199, 0, 43, 1);
    cursor: pointer;
  }
`

export { Banner, Content, Title, SubContent, Button, Container, ImageContainer }
