import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

import { SiteConsumer } from '../Context/Site'
import { Cart, Total, Icon } from './styled'

export default () => (
  <div>
    <SiteConsumer>
      {({ basket }) => (
        <Icon value={basket.length}>
          <Cart>
            <FaShoppingCart size={12} />
            <label>
              My Cart (<Total>{basket.length}</Total>)
            </label>
          </Cart>
        </Icon>
      )}
    </SiteConsumer>
  </div>
)
