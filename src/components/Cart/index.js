import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { FaShoppingCart } from 'react-icons/fa'

import { GET_ORDER } from '../../services/Apollo/Queries/order'

import { Cart, Total, Icon, Navigation } from './styled'

export default () => {
  const { loading, data, error } = useQuery(GET_ORDER)

  if (loading) return <div>Loading...</div>

  return (
    <Navigation to={'/checkout'}>
      <Cart>
        <FaShoppingCart size={12} />
        <label>
          My Cart (<Total>{data.Order.Items.length}</Total>)
        </label>
      </Cart>
      <Icon value={data.Order.Items.length}>
        <FaShoppingCart size={12} />
      </Icon>
    </Navigation>
  )
}
