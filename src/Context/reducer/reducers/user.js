export default (state, action) => {
  switch (action.type) {
    case 'User:Update': {
      console.log('Updating User >>>>', state, action)

      const user = { ...state, ...action.payload }
      console.log('new user >>>', user)
      return user
    }

    default:
      return state
  }
}
