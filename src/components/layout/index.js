import React, { useEffect, useState } from 'react'
import { StripeProvider } from 'react-stripe-elements'

import Header from '../header'
import Menu from '../menu'
import Footer from '../footer'
import Copyright from '../copyright'

import InstagramFeed from '../instagram'

import GlobalStyle from './globalstyle'

import { Page, Content } from './styled'
import { ThemeProvider } from 'styled-components'

import Authentication from '../Authentication'

export default ({ children, data }, context) => {
  return (
    <ThemeProvider theme={{ fontFamily: 'Gotham' }}>
      <Page>
        <GlobalStyle />
        <Header siteTitle={'unknown'} />
        <Authentication>
          <Menu />
          <Content>{children}</Content>
          <InstagramFeed />
          <Footer />
          <Copyright />
        </Authentication>
      </Page>
    </ThemeProvider>
  )
}
