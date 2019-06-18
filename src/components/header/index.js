import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { useQuery, useMutation } from 'react-apollo-hooks'

import Profile from '../Profile'
import Cart from '../Cart'
import Order from '../Order'

import SignUpButton from './SignUpButton'

import { SUBSCRIBE_USER } from '../../services/Apollo/Queries/auth'

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
  const { loading, data } = useQuery(SUBSCRIBE_USER)

  const isVisible = loading || !data

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
            <UserInfo loading={isVisible}>
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
                  <Order onComplete />
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
