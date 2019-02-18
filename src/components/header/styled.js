import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0px 10px;
  0px10pxtext-transform: uppercase;
  align-items: center;
`

const CompanyName = styled.div`
  width: 100px;
  display: flex;
  flex-wrap: nowrap;
  padding: 0px 5px;
  text-transform: uppercase;
`

const Logo = styled.div`
  display: flex;
  padding: 0px 20px;
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
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 12px;
  height: 80px;

  & > label {
    margin: 0 12px;
  }
`

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 35px;
  width: 35px;
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
  display: flex;
  position: relative;
  align-items: center;
  height: 80px;
  padding: 0px 10px;
  color: grey;
  position: relative;

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

  & > div {
    margin: 0 0.6em;
  }

  @media (max-width: 700px) {
    display: flex;
  }
`

const Icon = styled.div`
  posiition: relative;
  border-radius: 50%;
  color: gray;
  background: #ebebeb;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: '${$ => $.value}';
    position: absolute;
    font-size: 12px;
    background-color: #c5002c;
    width: 14px;
    height: 14px;
    color: #fff;
    top: 14px;
    right: 70px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }
`

export {
  Header,
  Icon,
  Logo,
  CompanyName,
  UserInfo,
  Profile,
  ProfileImage,
  Total,
  MenuItem,
  SubMenu,
  DesktopOptions,
  MobileOptions,
}
