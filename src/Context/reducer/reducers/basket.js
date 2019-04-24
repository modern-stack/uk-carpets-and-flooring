export default (state, action) => {
  console.log('Running >>>', action)
  switch (action.type) {
    case 'Add':
      return {
        ...action.payload,
      }

    default:
      return state
  }
}
