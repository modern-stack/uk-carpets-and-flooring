export default (state, action) => {
  switch (action.type) {
    case 'User:Update': {
      const user = { ...state, ...action.payload }

      return user
    }

    default:
      return state
  }
}
