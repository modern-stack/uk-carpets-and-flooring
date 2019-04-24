import React from 'react'

import Header from '../header'
import Menu from '../menu'
import Footer from '../../components/footer'
import Copyright from '../../components/copyright'

import InstagramFeed from '../../components/instagram'

import GlobalStyle from './globalstyle'

import { Page, Content } from './styled'
import { ThemeProvider } from 'styled-components'

import { Context } from '../../Context'

// import PageTransition from 'gatsby-plugin-page-transitions'

export default ({ children, data }) => {
  return (
    <ThemeProvider theme={{ fontFamily: 'Gotham' }}>
      <Page>
        <GlobalStyle />
        <Context>
          <Header siteTitle={'unknown'} />
          <Menu />
          <Content>{children}</Content>
          <InstagramFeed />
          <Footer />
          <Copyright />
        </Context>
      </Page>
    </ThemeProvider>
  )
}
