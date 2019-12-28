import React from 'react'
import Image from 'gatsby-image'

import { useStaticQuery, graphql } from 'gatsby'

import useFirebase from '../../Hooks/Firebase/useFirebase'
import { ProfileImage } from './styled'

export default () => {
  const { authUser } = useFirebase()

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

  if (authUser && authUser.photoURL)
    return <ProfileImage src={authUser.photoURL} />

  return <Image fixed={localQuery.guestIcon.childImageSharp.fixed} />
}
