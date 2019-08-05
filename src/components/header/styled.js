import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  0px10pxtext-transform: uppercase;
  align-items: center;

  @media (max-width: 700px) {
    padding: 10px 10px 0px 10px;
  }
`

const CompanyName = styled.div`
  width: 100px;
  display: flex;
  flex-wrap: nowrap;
  padding: 0px 5px;
  text-transform: uppercase;
  font-family: Gotham-Bold, ﻿AdobeInvisFont, ﻿MyriadPro-Regular;
  color: rgba(51, 51, 51, 255);
  text-align: left;
`

const Logo = styled.div`
  display: flex;
  padding: 0px 20px;
  cursor: pointer;
`

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  & > div:not(:last-child)::after {
    content: '';
    right: -2px;
    top: 25%;
    width: 1px;
    height: 20%;
    background-color: grey;
  }

  width: 100%;

  /* width: ${$ => ($.loading ? '0' : '100%')}; */
`

const Total = styled.label`
  color: red;
`

const SubMenu = styled.div`
  position: absolute;
  opacity: 0;
  top: 80px;
  background-color: #ebeeef;
  padding: 20px;
  text-align: left;
  z-index: 999;
  overflow: auto;
  white-space: nowrap;
  right: 0;
`

const MenuItem = styled.div`
  font-family: Gotham-Bold;
  text-decoration: none;
  display: flex;
  position: relative;
  align-items: center;
  height: 80px;
  padding: 0px 10px;
  color: grey;
  position: relative;
  white-space: nowrap;

  & > label {
    margin: 0 12px;
  }

  &:hover {
    background-color: #ebeeef;

    ${SubMenu} {
      opacity: 100;
    }
  }
`

const DesktopOptions = styled.div`
  display: block;

  @media (max-width: 700px) {
    display: none;
  }
`

const MobileOptions = styled.div`
  display: none;
  margin: 8px 0;
  min-height: 40px;

  & > div {
    margin: 0 0.6em;
  }

  @media (max-width: 700px) {
    display: flex;
  }
`

export {
  Header,
  Logo,
  CompanyName,
  UserInfo,
  Total,
  MenuItem,
  SubMenu,
  DesktopOptions,
  MobileOptions,
}
