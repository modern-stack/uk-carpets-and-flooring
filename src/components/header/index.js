import React, { useState } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { useStateValue } from '../../Context'

import Cart from '../Cart'

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

const renderProfile = auth => (
  <Profile>
    <ProfileImage src={auth.photoURL} />
    <label>{auth.displayName}</label>
  </Profile>
)

const renderSignIn = auth => <div onClick={() => auth.login()}>Sign In </div>

export default () => {
  const [user, setUser] = useState()
  const [{ auth }, dispatch] = useStateValue()

  console.log('auth >>>>', auth)

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
              {user ? renderProfile(auth.getUser()) : renderSignIn(auth)}
              <MenuItem>
                <FaHeart size={12} />
                <label>
                  My Wish list (<Total>2</Total>)
                </label>
              </MenuItem>
              <MenuItem>
                <Cart />
                <SubMenu>
                  <div>Summary</div>
                  <hr />
                  <div>this is a test and shiiiiii</div>
                  <div>hawow</div>
                  <div>hawow</div>
                  <div>hawow</div>
                </SubMenu>
              </MenuItem>
            </UserInfo>
          </DesktopOptions>

          <MobileOptions>
            <Cart />
            <div>
              {user ? <ProfileImage src={user.photoURL} /> : renderSignIn(auth)}
            </div>
          </MobileOptions>
        </Header>
      )}
    />
  )
}
