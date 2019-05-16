export default (state, action) => {
  console.log('adding item >>>>', action)
  switch (action.type) {
    case 'Order:AddItem': {
      const order = { ...state, items: [...state.items, action.payload] }

      window.localStorage.setItem('Order', JSON.stringify(order))
      return order
    }

    case 'Order:RemoveItem': {
      const order = state
      order = {
        ...order,
        items: order.items.filter($ => $.id !== action.payload.id),
      }
      window.localStorage.setItem('Order', JSON.stringify(order))
      return order
    }

    case 'Order:UpdateShipping': {
      const order = {
        ...state,
        shipping: { ...state.shipping, ...action.payload },
      }

      window.localStorage.setItem('Order', JSON.stringify(order))
      return order
    }

    case 'Order:Update': {
      const order = {
        ...state,
        ...action.payload,
      }

      window.localStorage.setItem('Order', JSON.stringify(order))
      return order
    }

    case 'Order:ClearShipping': {
      const order = {
        ...state,
        shipping: null,
      }

      window.localStorage.setItem('Order', JSON.stringify(order))
      return order
    }

    case 'Order:Clear': {
      return []
    }

    default:
      return state
  }
}
