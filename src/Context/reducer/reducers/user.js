export default (state, action) => {
  switch (action.type) {
    case 'User:Add':
      return [...state, { user: state.length + 1 }]

    default:
      return state
  }
}
