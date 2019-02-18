import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '../../styles/global'

import Header from '../header'
import Menu from '../menu'
import Footer from '../../components/footer'
import Copyright from '../../components/copyright'

import { Page, Content } from './styled'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import fonts from './fonts'
// import PageTransition from 'gatsby-plugin-page-transitions'

const GlobalStyle = createGlobalStyle`
  body {

  @font-face {
    font-family: 'Gotham Bold Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Gotham Bold Italic'), url('${
      fonts.GothamBoldItalic
    }') format('truetype');
  } 

  @font-face {
    font-family: 'Gotham Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Gotham Bold'), url('${fonts.GothamBold}') format('truetype');
  }

  @font-face {
    font-family: 'Gotham Bold Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Gotham Bold Italic'), url('${
      fonts.GothamBoldItalic
    }') format('truetype');
  }

  @font-face {
    font-family: 'Gotham Book';
    font-style: normal;
    font-weight: normal;
    src: local('Gotham Book'), url('${fonts.GothamBook}') format('truetype');
  }

  @font-face {
    font-family: 'Gotham Book Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Gotham Book Italic'), url('${
      fonts.GothamBookItalic
    }') format('truetype');
  }

  @font-face {
    font-family: 'Gotham Light Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Gotham Light Italic'), url('${
      fonts.GothamLightItalic
    }') format('truetype');
  }

  @font-face {
    font-family: 'Gotham Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Gotham Medium'), url('${
      fonts.GothamMedium
    }') format('truetype');
  }

  @font-face {
    font-family: 'Playfair Display Black';
    font-style: normal;
    font-weight: normal;
    src: local('Playfair Display Black'), url('${
      fonts.PlayfairDisplayBlack
    }') format('truetype');
  }


  @font-face {
    font-family: 'Playfair Display Black Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Playfair Display Black Italic'), url('${
      fonts.PlayfairDisplayBlackItalic
    }') format('truetype');
  }

  @font-face {
    font-family: 'Playfair Display Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Playfair Display Bold'), url('${
      fonts.PlayfairDisplayBold
    }') format('truetype');
  }

  @font-face {
    font-family: 'Playfair Display Bold Italic';
    font-style: normal;
    font-weight: normal;
    src: local('PlayfairDisplay Bold Italic'), url('${
      fonts.PlayfairDisplayBoldItalic
    }') format('truetype');
  }

  @font-face {
    font-family: 'Playfair Display Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Playfair Display Italic'), url('${
      fonts.PlayfairDisplayItalic
    }') format('truetype');
  }

  @font-face {
    font-family: 'Playfair Display Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Playfair Display Regular'), url('${
      fonts.PlayfairDisplayRegular
    }') format('truetype');
  }

  
`
const Layout = ({ children }) => (
  <ThemeProvider theme={{ fontFamily: 'Gotham' }}>
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
        <Page>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Menu />
          <Content>{children}</Content>
          <Footer />
          <Copyright />
        </Page>
      )}
    />
    {/* </PageTransition> */}
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
