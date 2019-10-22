import React from 'react'
import { navigateTo } from 'gatsby-link'
import { useQuery } from 'react-apollo-hooks'

import { Primary } from '../../Button'
import Title from '../../Title'

import {
  Order,
  Sku,
  ImageContainer,
  SectionTitle,
  Total,
  Price,
  OrderContainer,
} from './styled'

import {
  GET_ORDER,
  GET_ORDER_ITEMS,
} from '../../../services/Apollo/Queries/order'

export default () => {
  const localOrder = useQuery(GET_ORDER)
  if (localOrder.loading || !localOrder.data || !localOrder.data.Order)
    return <div>Loading</div>

  const orderItems = useQuery(GET_ORDER_ITEMS, {
    variables: {
      Items: localOrder.data.Order.items.map($ => $.parent).concat(['']),
    },
  })

  console.log('Order >>>', localOrder)

  if (orderItems.loading) return <p>Loading pupper...</p>

  if (!orderItems.data || !orderItems.data.allSkus)
    return <div>No Data found!</div>

  const { allSkus } = orderItems.data

  return (
    <OrderContainer>
      <Order>
        <Title title={'Your Order'} />

        <SectionTitle>Summary</SectionTitle>
        {localOrder.data.Order.items.map($ => {
          const { node } = allSkus.edges.filter(
            $$ => $$.node._meta.id === $.parent
          )[0]

          return (
            <Sku>
              <ImageContainer>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={node.featuredimage.url}
                />
              </ImageContainer>
              <div>
                {node.product.name} {node.name.text}
              </div>
              <div>£{$.amount}</div>
            </Sku>
          )
        })}
        <Total>
          <div>Total</div>
          <Price>
            £
            {localOrder.data.Order.items.reduce((total, $) => {
              return total + parseFloat($.amount)
            }, 0)}
          </Price>
        </Total>
        <Primary onClick={() => navigateTo('/checkout')}>{'Checkout'}</Primary>
      </Order>
    </OrderContainer>
  )
}
