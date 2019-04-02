import React from 'react'

import Header from '../header'
import Menu from '../menu'
import Footer from '../../components/footer'
import Copyright from '../../components/copyright'

import InstagramFeed from '../../components/instagram'

import GlobalStyle from './globalstyle'
import SiteContext from '../Context/Site'

import { Page, Content } from './styled'
import { ThemeProvider } from 'styled-components'
// import PageTransition from 'gatsby-plugin-page-transitions'

export default ({ children, data }) => {
  return (
    <ThemeProvider theme={{ fontFamily: 'Gotham' }}>
      <Page>
        <GlobalStyle />
        <SiteContext>
          <Header siteTitle={'unknown'} />
          <Menu />
          <Content>{children}</Content>
          <InstagramFeed />
          <Footer />
          <Copyright />
        </SiteContext>
      </Page>
    </ThemeProvider>
  )
}
