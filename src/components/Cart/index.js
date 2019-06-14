import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { FaShoppingCart } from 'react-icons/fa'

import { GET_ORDER } from '../../services/Apollo/Queries/order'

import { Cart, Total, Icon, Navigation } from './styled'

export default () => {
  const { loading, data } = useQuery(GET_ORDER)

  if (loading) return <div>Loading...</div>

  console.log('Data >>>', data)

  return (
    <Navigation to={'/checkout'}>
      <Cart>
        <FaShoppingCart size={12} />
        <label>
          My Cart (<Total>{data.Order.OrderItems.edges.length}</Total>)
        </label>
      </Cart>
      <Icon value={data.Order.OrderItems.edges.length}>
        <FaShoppingCart size={12} />
      </Icon>
    </Navigation>
  )
}
