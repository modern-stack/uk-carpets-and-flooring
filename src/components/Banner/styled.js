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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 9998;
  width: 4em;
`

const Title = styled.h1`
  color: white;
  font-size: 0.5em;
`

const SubContent = styled.h2`
  color: white;
`

const Button = styled.button`
  border 2px solid white;
  width: 12em;
  height: 3em;
  margin: 18px 0;
  padding: 0px;
  background-color: none;
  background-color: Transparent;
  text-align: center;
  color: white;

   &:hover {
    background-color: rgb(199, 0, 43, 1);
    color: white;
    border: 1px solid rgb(199, 0, 43, 1);
    cursor: pointer;
  }
`

export { Banner, Content, Title, SubContent, Button, ImageContainer }
