import React, { useEffect, useState } from 'react'

import Header from '../header'
import Menu from '../menu'
import Footer from '../footer'
import Copyright from '../copyright'
import InstagramFeed from '../instagram'

import GlobalStyle from './globalstyle'

import { Page, Content } from './styled'
import { ThemeProvider } from 'styled-components'

import Authentication from '../Authentication'

import Loadable from 'react-loadable'

const LoadableMenu = Loadable({
  loader: () => import('../menu'),
  loading: () => <div>loading...</div>,
})

const LoadableHeader = Loadable({
  loader: () => import('../header'),
  loading: () => <div>loading...</div>,
})

export default ({ children }) => {
  return (
    <ThemeProvider theme={{ fontFamily: 'Gotham' }}>
      <Page>
        <GlobalStyle />
        <LoadableHeader siteTitle={'unknown'} />
        <Authentication>
          <LoadableMenu />
          <Content>{children}</Content>
          <InstagramFeed />
          <Footer />
          <Copyright />
        </Authentication>
      </Page>
    </ThemeProvider>
  )
}
