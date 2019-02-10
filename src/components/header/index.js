import React, { useEffect, useState } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import firebase from '../../services/firebase'

import {
  Header,
  Logo,
  UserInfo,
  CompanyName,
  Profile,
  ProfileImage,
  WishList,
  Total,
  ShoppingCart,
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
          <UserInfo>
            {user ? renderProfile(user) : renderSignIn()}
            <WishList>
              <FaHeart size={12} />
              <label>My Wish List</label>
            </WishList>
            <ShoppingCart>
              <FaShoppingCart size={12} />
              <label>
                My Cart (<Total>2</Total>)
              </label>
            </ShoppingCart>
          </UserInfo>
        </Header>
      )}
    />
  )
}
