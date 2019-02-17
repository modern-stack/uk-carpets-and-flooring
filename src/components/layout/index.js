import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Menu from '../menu'
import Footer from '../../components/footer'
import Copyright from '../../components/copyright'

import { Content } from './styled'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
// import PageTransition from 'gatsby-plugin-page-transitions'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {/* <PageTransition> */}
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Menu />
          <Content>{children}</Content>
          <Footer />
          <Copyright />
        </>
      )}
    />
    {/* </PageTransition> */}
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
