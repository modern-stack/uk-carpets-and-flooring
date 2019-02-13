import styled from 'styled-components'

const Banner = styled.div`
  position: relative;
  width: 100%;
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
  width: 4em;
`

const Title = styled.h1`
  color: white;
  font-size: 2em;
`

const SubContent = styled.h2`
  color: white;
`

const Button = styled.button`
  border 2px solid white;
  width: 100%;
  height: 3em;
  margin: 18px 0;

   &:hover {
    background-color: rgb(199, 0, 43, 1);
    color: white;
    border: 1px solid rgb(199, 0, 43, 1);
    cursor: pointer;
  }
`

export { Banner, Content, Title, SubContent, Button }
