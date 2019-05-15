import userReducer from './reducers/user'
import orderReducer from './reducers/order'
import authReducer from './reducers/auth'

export default () => ({ user, order, auth }, action) => ({
  user: userReducer(user, action),
  order: orderReducer(order, action),
  auth: authReducer(auth, action),
})
