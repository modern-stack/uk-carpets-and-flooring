import React from 'react'

import { Page, Content } from './styled'

export default ({ children, data }, context) => {
  return (
    // <ThemeProvider theme={{ fontFamily: 'Gotham' }}>
    <Page>
      {/* <GlobalStyle /> */}
      {/* <Header siteTitle={'unknown'} /> */}
      {/* <Authentication> */}
      {/* <Menu /> */}
      <Content>{children}</Content>
      {/* <InstagramFeed /> */}
      {/* <Footer /> */}
      {/* <Copyright /> */}
      {/* </Authentication> */}
    </Page>
    // </ThemeProvider>
  )
}
