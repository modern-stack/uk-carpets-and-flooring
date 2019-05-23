import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

import { Cart, Total, Icon, Navigation } from './styled'

import { useStateValue } from '../../Context'

export default () => {
  const [{ order }, dispatch] = useStateValue()

  return (
    <Navigation to={'/checkout'}>
      <Cart>
        <FaShoppingCart size={12} />
        <label>
          My Cart (<Total>{order.items.length}</Total>)
        </label>
      </Cart>
      <Icon value={order.items.length}>
        <FaShoppingCart size={12} />
      </Icon>
    </Navigation>
  )
}
