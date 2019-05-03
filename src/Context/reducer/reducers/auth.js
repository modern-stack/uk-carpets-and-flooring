import { auth, login } from '../../../services/Auth'

export default (state, action) => {
  switch (action.type) {
    case 'Auth:Login': {
      auth.authorize()
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
