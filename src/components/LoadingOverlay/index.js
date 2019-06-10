import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

import { LoadingOverlay, Content } from './styled'
import { FaSpinner } from 'react-icons/fa'

export default ({ isVisible }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <LoadingOverlay isVisible={isVisible}>
      <Content>
        <div>
          <Img fixed={data.logo.childImageSharp.fixed} />
        </div>
        <div>
          <h3>Initalising...</h3>
        </div>
      </Content>
    </LoadingOverlay>
  )
}
