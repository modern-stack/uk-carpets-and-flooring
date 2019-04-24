import userReducer from './reducers/user'
import basketReducer from './reducers/basket'

export default () => ({ user, basket }, action) => ({
  user: userReducer(user, action),
  basket: basketReducer(basket, action),
})
