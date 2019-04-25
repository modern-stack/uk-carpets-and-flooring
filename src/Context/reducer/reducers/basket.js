export default (state, action) => {
  switch (action.type) {
    case 'Basket:Add':
      return [...state, { ...action.payload }]

    case 'Basket:Remove':
      return state.filter($ => $.id !== action.payload.id)

    default:
      return {}
  }
}
