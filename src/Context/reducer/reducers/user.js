export default (state, action) => {
  switch (action.type) {
    case 'User:Login': {
      debugger
      return { ...state, currentUser: action.payload }
    }

    default:
      return state
  }
}
