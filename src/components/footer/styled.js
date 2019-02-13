import styled from 'styled-components'

const Footer = styled.div`
  font-size: 12px;
  background-color: #3e3e3e;
  color: white;
  display: flex;
  flex: space-between;
  padding: 5% 2%;
  position: relative;
  height: 100%;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${$ => $.flexdirection || 'row'};
  position: relative;
  align-content: center;
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
  padding: 0 2%;
  float: left;
  justify-content: center;
`

const Links = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 6%;

  & > a {
    display: flex;
    flex: 1;
  }
`

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 4px;
`

export { Footer, Content, Links, Title }
