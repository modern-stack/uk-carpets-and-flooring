import styled from 'styled-components'

const Banner = styled.div`
  display: flex;
  posiion: relative;
  height: 100%;
  border: 1px solid red;
  flex: 1;
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

export { Banner, Content, Title, SubContent, Button }
