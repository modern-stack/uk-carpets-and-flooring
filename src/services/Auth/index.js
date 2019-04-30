import auth0 from 'auth0-js'
import { WebAuth } from 'auth0-js'
import { navigateTo } from 'gatsby-link'

const auth = new auth0.WebAuth({
  domain: process.env.GATSBY_AUTH0_DOMAIN,
  clientID: process.env.GATSBY_AUTH0_CLIENT_ID,
  redirectUri: 'http://localhost:8000/callback',
  audience: `https://${process.env.GATSBY_AUTH0_DOMAIN}/api/v2/`,
  responseType: 'token id_token',
  scope: 'openid profile email',
})

export default {
  logout: () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('user')
  },

  login: () => auth.authorize(),

  handleAuthentication: () => {
    if (typeof window !== 'undefined') {
      auth.parseHash((err, authResult) => {
        console.log('result >>>', authResult)
        if (authResult && authResult.accessToken && authResult.idToken) {
          //   this.setSession(authResult)
        } else if (err) {
          console.log(err)
        }

        // Return to the homepage after authentication.
        navigateTo('/')
      })
    }
  },

  isAuthenticated: () => {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  },

  setSession: authResult => {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)

    auth.client.userInfo(authResult.accessToken, (err, user) => {
      localStorage.setItem('user', JSON.stringify(user))
    })
  },

  getUser: () => {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'))
    }
  },

  getUserName: () => {
    if (this.getUser()) {
      return this.getUser().name
    }
  },
}
