import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

import { Cart, Total, Icon } from './styled'

import { useStateValue } from '../../Context'

export default () => {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div>
      <Cart>
        <FaShoppingCart size={12} />
        <label>
          My Cart (<Total>{basket.length}</Total>)
        </label>
      </Cart>
      <Icon value={basket.length}>
        <FaShoppingCart size={12} />
      </Icon>
    </div>
  )
}
