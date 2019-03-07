import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header'
import Menu from '../menu'
import Footer from '../../components/footer'
import Copyright from '../../components/copyright'

import GlobalStyle from './globalstyle'

import { Page, Content } from './styled'
import { ThemeProvider } from 'styled-components'
// import PageTransition from 'gatsby-plugin-page-transitions'

const Layout = ({ children, page }) => (
  <ThemeProvider theme={{ fontFamily: 'Gotham' }}>
    <Page>
      <GlobalStyle />
      <Header siteTitle={'unknown'} />
      <Menu />
      <Content>{children}</Content>
      <Footer />
      <Copyright />
    </Page>
    {/* </PageTransition> */}
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
