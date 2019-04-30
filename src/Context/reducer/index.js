import userReducer from './reducers/user'
import basketReducer from './reducers/basket'
import authReducer from './reducers/auth'

export default () => ({ user, basket, auth }, action) => ({
  user: userReducer(user, action),
  basket: basketReducer(basket, action),
  auth: basketReducer(basket, action),
})
