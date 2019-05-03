export default (state, action) => {
  console.log('stuff >>>', state, action)
  switch (action.type) {
    case 'User:Login': {
      return { ...state, currentUser: action.payload }
    }

    default:
      return state
  }
}
