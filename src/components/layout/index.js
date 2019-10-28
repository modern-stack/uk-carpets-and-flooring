import React from 'react'

import Copyright from '../copyright'

import { Page, Content } from './styled'
import { ThemeProvider } from 'styled-components'

import Loadable from 'react-loadable'

const LoadableAuthentication = Loadable({
  loader: () => import('../Authentication'),
  loading: () => <div>loading...</div>,
})

const LoadableMenu = Loadable({
  loader: () => import('../menu'),
  loading: () => <div>loading...</div>,
})

const LoadableHeader = Loadable({
  loader: () => import('../header'),
  loading: () => <div>loading...</div>,
})

const LoadableInstagram = Loadable({
  loader: () => import('../instagram'),
  loading: () => <div>loading...</div>,
})

const LoadableFooter = Loadable({
  loader: () => import('../footer'),
  loading: () => <div>loading...</div>,
})

const LoadableStyle = Loadable({
  loader: () => import('./globalstyle'),
  loading: () => <div>loading...</div>,
})

const LoadableNotice = Loadable({
  loader: () => import('../Notice'),
  loading: () => <div>loading...</div>,
})

export default ({ children }) => {
  return (
    <ThemeProvider theme={{ fontFamily: 'Gotham' }}>
      <Page>
        <LoadableStyle />
        <LoadableHeader siteTitle={'unknown'} />
        <LoadableAuthentication>
          <LoadableMenu />
          <Content>{children}</Content>
          <LoadableInstagram />
          <LoadableFooter />
          <Copyright />
        </LoadableAuthentication>
        <LoadableNotice />
      </Page>
    </ThemeProvider>
  )
}
