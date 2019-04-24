export default (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme,
      }

    default:
      return state
  }
}