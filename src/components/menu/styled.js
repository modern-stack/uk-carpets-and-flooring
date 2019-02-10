import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  flex: space-between;
  justify-content: center;
  opacity: 0.6;
  z-index: 99;
  position: relative;
`

const MenuItem = styled.div`
  display: flex;
  padding: 24px;
  text-transform: uppercase;
  color: black;
  background-color: #c7002b;
`

export { Menu, MenuItem }
