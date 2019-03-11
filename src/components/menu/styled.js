import styled from 'styled-components'
import { FaFileExcel } from 'react-icons/fa'

import { Link } from 'gatsby'

const Menu = styled.div`
  display: flex;
  flex: space-between;
  z-index: 99;
  position: relative;
  border: none;
  justify-content: space-around;
  padding: 0px 20%;
  background-color: rgb(255, 255, 255, 0.4);

  @media (max-width: 700px) {
    display: none;
  }
`

const SubMenu = styled.div`
  position: absolute;
  opacity: 0;
  top: 42px;
  background-color: rgb(199, 0, 43, 1);
  color: white;
  padding: 20px;
  text-align: left;
  z-index: 999;
  overflow: auto;
  white-space: nowrap;
  right: 0;
  left: 0;
`

const MenuItem = styled(Link)`
  position: relative;
  display: flex;
  padding: 12px 0px;
  text-transform: uppercase;
  color: black;
  width: 100%;
  justify-content: center;

  a:link {
    color: black;
    text-decoration: none;
  }

  &:hover {
    background-color: rgb(199, 0, 43, 1);
    cursor: pointer;
    color: white;

    a:link {
      color: white;
      text-decoration: none;
    }

    ${SubMenu} {
      opacity: 100;
    }
  }

  @media (max-width: 700px) {
    color: ${$ => ($.inverted ? 'black' : 'white')};
    background-color: ${$ => ($.inverted ? 'white' : 'rgb(199, 0, 43, 1)')};
  }
`

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #c5002c;
  opacity: 1;
  justify-content: space-evenly;
  flex: 1 20px;

  @media (max-width: 700px) {
    display: flex;
    z-index: 99999;
  }

  & > div {
    flex-grow: 2;
    :last-child {
      flex-grow: 1;
      filter: brightness(70%);
    }
  }
`

const MobileSubMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${$ => (!$.active ? 0 : '100%')};
  transition: all 1s;
  z-index: 9999;
`

const MobileSubMenuContent = styled.div`
  background: white;
  height: 100%;
  overflow: scroll;
  justify-content: center;

  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;

  & > div {
    display: flex;
  }
`

const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
`

const OptionContainer = styled.div`
  border-radius: 50%;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebebeb;
  color: gray;
`

const OptionImage = styled.img`
  border-radius: 50%;
  height: 45px;
  width: 45px;
`

export {
  Menu,
  MenuItem,
  SubMenu,
  MobileMenu,
  MobileSubMenu,
  Container,
  MobileSubMenuContent,
  Options,
  OptionContainer,
  OptionImage,
}
