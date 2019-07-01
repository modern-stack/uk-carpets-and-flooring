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
  const [stripe, setStripe] = useState(null)

  useEffect(() => {
    const apiKey = 'pk_test_j8D2dhgBhWY1ToEZm9NsrF48'

    const stripeJs = document.createElement('script')
    stripeJs.src = 'https://js.stripe.com/v3/'
    stripeJs.async = true
    stripeJs.onload = () => {
      // if (this._mounted) {
      setStripe(window.Stripe(apiKey))
      // }
    }
    document.body && document.body.appendChild(stripeJs)
  }, [])

  return (
    <ThemeProvider theme={{ fontFamily: 'Gotham' }}>
      <Page>
        <GlobalStyle />
        <Header siteTitle={'unknown'} />
        <Authentication>
          <Menu />
          <StripeProvider stripe={stripe}>
            <Content>{children}</Content>
          </StripeProvider>
          <InstagramFeed />
          <Footer />
          <Copyright />
        </Authentication>
      </Page>
    </ThemeProvider>
  )
}
