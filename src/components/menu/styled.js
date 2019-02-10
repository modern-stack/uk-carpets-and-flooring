import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  flex: space-between;
  z-index: 99;
  position: relative;
  border: 1px solid grey;
  justify-content: space-around;
  padding: 0px 20%;
`

const MenuItem = styled.div`
  display: flex;
  padding: 12px 0px;
  text-transform: uppercase;
  color: black;
  width: 100%;
  justify-content: center;

  opacity: 0.6;

  &:hover {
    opacity: 1;
    background-color: #c7002b;
    color: white;
  }
`

export { Menu, MenuItem }
