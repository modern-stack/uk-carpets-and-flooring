import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  text-transform: uppercase;
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
    height: 40%;
    background-color: grey;
  }
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > label {
    padding: 0 10px;
  }
`

const WishList = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 5px;
  color: grey;

  & > label {
    padding: 0 10px;
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

const ShoppingCart = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 5px;
  color: grey;

  & > label {
    padding: 0 10px;
  }
`

export {
  Header,
  Logo,
  CompanyName,
  UserInfo,
  Profile,
  ProfileImage,
  WishList,
  Total,
  ShoppingCart,
}
