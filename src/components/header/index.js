import React, { useEffect, useState } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import firebase from '../../services/firebase'

import {
  Header,
  Icon,
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

const renderProfile = user => (
  <Profile>
    <ProfileImage src={user.photoURL} />
    <label>{user.displayName}</label>
  </Profile>
)

const renderSignIn = () => <div onClick={() => firebase.SignIn()}>Sign In </div>

export default () => {
  const [user, setUser] = useState()

  useEffect(async () => {
    firebase.auth.onAuthStateChanged($ => setUser($))
  }, [])

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
              {user ? renderProfile(user) : renderSignIn()}
              <MenuItem>
                <FaHeart size={12} />
                <label>
                  My Wish list (<Total>2</Total>)
                </label>
              </MenuItem>
              <MenuItem>
                <FaShoppingCart size={12} />
                <label>
                  My Cart (<Total>2</Total>)
                </label>
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
            <Icon>
              <FaShoppingCart size={12} />
            </Icon>
            <div>
              {user ? <ProfileImage src={user.photoURL} /> : renderSignIn()}
            </div>
          </MobileOptions>
        </Header>
      )}
    />
  )
}
