import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { useStateValue } from '../../Context'

import Cart from '../Cart'
import Order from '../Order'

import {
  Header,
  Logo,
  UserInfo,
  CompanyName,
  Profile,
  ProfileImage,
  Total,
  MenuItem,
  SubMenu,
  DesktopOptions,
  MobileOptions,
} from './styled'

const renderProfile = user => {
  return (
    <Profile>
      <ProfileImage src={user.picture} />

      <label>{user.name}</label>
    </Profile>
  )
}

const renderSignIn = auth => <div onClick={() => auth.login()}>Sign In </div>

export default () => {
  const [{ user, basket, auth }, dispatch] = useStateValue()

  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fixed(width: 35, height: 35) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <Header>
          <Logo>
            <Img fixed={data.logo.childImageSharp.fixed} />
            <CompanyName>UK Carpets & Flooring</CompanyName>
          </Logo>

          <DesktopOptions>
            <UserInfo>
              {user ? renderProfile(user) : renderSignIn(auth)}
              <MenuItem>
                <FaHeart size={12} />
                <label>
                  My Wish list (<Total>2</Total>)
                </label>
              </MenuItem>
              <MenuItem>
                <Cart />
                <SubMenu>
                  <Order onComplete />
                </SubMenu>
              </MenuItem>
            </UserInfo>
          </DesktopOptions>

          <MobileOptions>
            <Cart />
            <div>
              {user ? <ProfileImage src={user.picture} /> : renderSignIn(auth)}
            </div>
          </MobileOptions>
        </Header>
      )}
    />
  )
}
