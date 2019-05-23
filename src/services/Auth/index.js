import auth0 from 'auth0-js'
// import { resolve } from 'path'

const auth = new auth0.WebAuth({
  domain: process.env.GATSBY_AUTH0_DOMAIN,
  clientID: process.env.GATSBY_AUTH0_CLIENT_ID,
  redirectUri: process.env.GATSBY_AUTH0_CALLBACK_URL,
  audience: `https://${process.env.GATSBY_AUTH0_DOMAIN}/api/v2/`,
  responseType: 'token id_token',
  scope: 'openid profile email app_metadata',
})

function logout() {
  // localStorage.removeItem('access_token')
  // localStorage.removeItem('id_token')
  // localStorage.removeItem('expires_at')
  // localStorage.removeItem('user')
}

function login() {
  return auth.authorize()
}

async function handleAuthentication() {
  return new Promise(resolve => {
    if (typeof window !== 'undefined') {
      return auth.parseHash((err, authResult) => {
        return resolve({ err, authResult })
      })
    }

    return resolve({ err: 'No SSR' })
  })
}

function isAuthenticated() {
  // const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
  // return new Date().getTime() < expiresAt
}

async function setSession(authResult) {
  return new Promise(resolve => {
    // const expiresAt = JSON.stringify(
    //   authResult.expiresIn * 1000 + new Date().getTime()
    // )
    // localStorage.setItem('access_token', authResult.accessToken)
    // localStorage.setItem('id_token', authResult.idToken)
    // localStorage.setItem('expires_at', expiresAt)

    auth.client.userInfo(authResult.accessToken, (err, user) => {
      // resolve(true)
    })
  })
}

function getUser() {
  // if (localStorage.getItem('user')) {
  // return JSON.parse(localStorage.getItem('user'))
  // }
}

function getUserName() {
  if (this.getUser()) {
    return this.getUser().name
  }
}

export default {
  logout,
  login,
  handleAuthentication,
  isAuthenticated,
  isAuthenticated,
  setSession,
  getUser,
  getUserName,
}
