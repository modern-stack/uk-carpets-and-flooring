import React from 'react'
import Image from 'gatsby-image'
import { useQuery } from 'react-apollo-hooks'
import { useStaticQuery, graphql } from 'gatsby'

import { ProfileImage } from './styled'
import { SUBSCRIBE_USER } from '../../services/Apollo/Queries/auth'

export default () => {
  const { loading, data } = useQuery(SUBSCRIBE_USER)
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

  if (data.CurrentUser.picture)
    return <ProfileImage src={data.CurrentUser.picture} />

  return <Image fixed={localQuery.guestIcon.childImageSharp.fixed} />
}
