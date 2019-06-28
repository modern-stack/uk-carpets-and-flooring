import React from 'react'
import Image from 'gatsby-image'

import { useStaticQuery, graphql } from 'gatsby'
import { useQuery } from 'react-apollo-hooks'
import { SUBSCRIBE_USER } from '../../services/Apollo/Queries/auth'

import { Profile, ProfileImage } from './styled'

export default () => {
  const { loading, error, data } = useQuery(SUBSCRIBE_USER)
  if (loading || !data || !data.CurrentUser) return null

  const localQuery = useStaticQuery(graphql`
    query {
      guestIcon: file(relativePath: { eq: "guest-icon.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log('local >>>', localQuery)

  const { given_name, picture } = data.CurrentUser

  return (
    <Profile>
      {picture ? (
        <ProfileImage src={picture} />
      ) : (
        <Image fixed={localQuery.guestIcon.childImageSharp.fixed} />
      )}

      <label>Hi, {given_name}</label>
    </Profile>
  )
}
