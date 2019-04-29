export default (state, action) => {
  switch (action.type) {
    case 'Basket:Add': {
      const basket = [...state, action.payload]
      window.localStorage.setItem('Basket', JSON.stringify(basket))
      return basket
    }

    case 'Basket:Remove': {
      const basket = state.filter($ => $.id !== action.payload.id)
      window.localStorage.setItem('Basket', JSON.stringify(basket))
      return basket
    }

    case 'Basket:Clear': {
      return []
    }

    default:
      return []
  }
}
