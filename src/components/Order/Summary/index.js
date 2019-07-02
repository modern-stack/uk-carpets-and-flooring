import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import SummaryCta from './Cta'

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

const Summary = () => {
  const localOrder = useQuery(GET_ORDER)
  if (localOrder.loading || !localOrder.data || !localOrder.data.Order)
    return <div>Loading</div>

  const orderItems = useQuery(GET_ORDER_ITEMS, {
    variables: {
      Items: localOrder.data.Order.items.map($ => $.parent).concat(['']),
    },
  })

  if (orderItems.loading) return <p>Loading pupper...</p>

  if (!orderItems.data || !orderItems.data.allSkus)
    return <div>No Data found!</div>

  const { allSkus } = orderItems.data

  return (
    <OrderContainer>
      <Order>
        <Title title={'Your Order'} />

        <SectionTitle>Summary</SectionTitle>
        {allSkus.edges.map($ => (
          <Sku>
            <ImageContainer>
              <img
                style={{ width: '100%', height: '100%' }}
                src={$.node.featuredimage.url}
              />
            </ImageContainer>
            <div>
              {$.node.product.name} {$.node.name.text}
            </div>
            <div>£{$.node.price}</div>
          </Sku>
        ))}
        <Total>
          <div>Total</div>
          <Price>
            £
            {allSkus.edges.reduce((total, $) => {
              return total + parseFloat($.node.price)
            }, 0)}
          </Price>
        </Total>
      </Order>
    </OrderContainer>
  )
}

export { Summary, SummaryCta }
