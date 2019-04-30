import auth0 from 'auth0-js'

import { WebAuth } from 'auth0-js'

const auth = new auth0.WebAuth({
  domain: process.env.GATSBY_AUTH0_DOMAIN,
  clientID: process.env.GATSBY_AUTH0_CLIENT_ID,
  redirectUri: 'http://localhost:8000/callback',
  audience: `https://${process.env.GATSBY_AUTH0_DOMAIN}/api/v2/`,
  responseType: 'token id_token',
  scope: 'openid profile email',
})

export default {
  login: () => auth.authorize(),
}
