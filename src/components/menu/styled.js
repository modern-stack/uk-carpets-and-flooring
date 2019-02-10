import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  flex: space-between;
  z-index: 99;
  position: relative;
  border: none;
  justify-content: space-around;
  padding: 0px 20%;
  background-color: rgb(255, 255, 255, 0.4);
`

const MenuItem = styled.div`
  position: relative;
  display: flex;
  padding: 12px 0px;
  text-transform: uppercase;
  color: black;
  width: 100%;
  justify-content: center;
  background-color: rgb(255, 255, 255, 0.4);

  &:hover {
    background-color: rgb(199, 0, 43, 1);
    cursor: pointer;
    color: white;
  }
`

export { Menu, MenuItem }
