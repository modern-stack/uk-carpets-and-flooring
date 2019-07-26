import React from 'react'
import { FaHeart } from 'react-icons/fa'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { navigateTo } from 'gatsby-link'

import Profile from '../Profile'
import Cart from '../Cart'
import Summary from './Summary'

import SignUpButton from './SignUpButton'

import {
  Header,
  Logo,
  UserInfo,
  CompanyName,
  Total,
  MenuItem,
  SubMenu,
  DesktopOptions,
  MobileOptions,
} from './styled'

export default () => {
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
            <CompanyName>
              <div>UK Carpets & Flooring</div>
            </CompanyName>
          </Logo>

          <DesktopOptions>
            <UserInfo>
              <Profile />
              <MenuItem>
                <FaHeart size={12} />
                <label>
                  My Wish list (<Total>2</Total>)
                </label>
              </MenuItem>
              <MenuItem>
                <Cart />
                <SubMenu>
                  <Summary />
                </SubMenu>
              </MenuItem>
              <SignUpButton />
            </UserInfo>
          </DesktopOptions>

          <MobileOptions>
            <Cart />
            <Profile />
            <SignUpButton />
          </MobileOptions>
        </Header>
      )}
    />
  )
}
