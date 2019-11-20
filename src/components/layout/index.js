import React from 'react'
import ContentLoader from 'react-content-loader'

import { Page, Content } from './styled'
import { ThemeProvider } from 'styled-components'

import Loadable from 'react-loadable'

const LoadableAuthentication = Loadable({
  loader: () => import('../Authentication'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ height: '40vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

const LoadableMenu = Loadable({
  loader: () => import('../menu'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ height: '10vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

const LoadableHeader = Loadable({
  loader: () => import('../header'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ height: '20vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

const LoadableInstagram = Loadable({
  loader: () => import('../instagram'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ height: '10vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

const LoadableFooter = Loadable({
  loader: () => import('../footer'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ height: '10vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

const LoadableStyle = Loadable({
  loader: () => import('./globalstyle'),
  loading: () => (
    <ContentLoader
      height={160}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="5" rx="0" ry="0" width="20%" height="100%" />
      <rect x="51" y="13" rx="0" ry="0" width="20" height="100%" />
      <rect x="132" y="15" rx="0" ry="0" width="50%" height="100%" />
      <rect x="218" y="17" rx="0" ry="0" width="10%" height="100%" />
      <rect x="295" y="16" rx="0" ry="0" width="10%" height="100%" />
      <rect x="355" y="17" rx="0" ry="0" width="10%" height="100%" />
    </ContentLoader>
  ),
})

const LoadableNotice = Loadable({
  loader: () => import('../Notice'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ height: '10vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

const LoadableCopyRight = Loadable({
  loader: () => import('../copyright'),
  loading: () => (
    <ContentLoader
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ height: '10vh', width: '100%' }}
      preserveAspectRatio="none"
    >
      <rect x="10" y="5" rx="0" ry="0" width="100%" height="90%" />
    </ContentLoader>
  ),
})

export default ({ children }) => {
  return (
    <React.Fragment>
      {/* <ThemeProvider theme={{ fontFamily: 'Gotham' }}> */}
      <Page>
        <LoadableStyle />
        <LoadableHeader siteTitle={'unknown'} />
        <LoadableAuthentication>
          <LoadableMenu />
          <Content>{children}</Content>
          <LoadableInstagram />
          <LoadableFooter />
          <LoadableCopyRight />
        </LoadableAuthentication>
        <LoadableNotice />
      </Page>
    </React.Fragment>
    // </ThemeProvider>
  )
}
