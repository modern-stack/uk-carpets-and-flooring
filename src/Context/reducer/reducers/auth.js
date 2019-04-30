// const auth0 = new auth0.WebAuth({
//   domain: AUTH_CONFIG.domain,
//   clientID: AUTH_CONFIG.clientId,
//   redirectUri: AUTH_CONFIG.callbackUrl,
//   responseType: 'token id_token',
//   scope: 'openid',
// })

import auth from '../../../services/Auth'

export default (state, action) => {
  switch (action.type) {
    case 'Auth:Login': {
      //   this.auth0.authorize()
      return {}
    }

    case 'Auth:Remove': {
      //   const Auth = state.filter($ => $.id !== action.payload.id)
      //   window.localStorage.setItem('Auth', JSON.stringify(Auth))
      return {}
    }

    case 'Auth:Clear': {
      return []
    }

    default:
      return []
  }
}
