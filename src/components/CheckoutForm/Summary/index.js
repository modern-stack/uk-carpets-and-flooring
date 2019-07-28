import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import Subtitle from '../Subtitle'

import { Sku, ImageContainer, Total } from './styled'

import { GET_ORDER_ITEMS } from '../../../services/Apollo/Queries/order'

export default ({ items }) => {
  const { data, loading, error } = useQuery(GET_ORDER_ITEMS, {
    variables: {
      Items: items.map($ => $.parent).concat(['']),
    },
  })

  if (loading) return null

  return (
    <div>
      <br />
      <br />
      <Subtitle>
        <div>your order</div>
      </Subtitle>

      {data.allSkus.edges.map(($, i) => (
        <Sku>
          <ImageContainer>
            <img
              style={{ width: '100%', height: '100%' }}
              src={$.node.featuredimage.url}
            />
          </ImageContainer>
          <div>
            <h2>{$.node.product.name}</h2>
            <div class={'title'}>{$.node.name[0].text}</div>
          </div>
          <div>
            <input type={'number'} value={items[i].quantity} />
          </div>
          <div>£{(items[i].quantity * $.node.price).toFixed(2)}</div>
        </Sku>
      ))}
      <Total>
        <div>
          <div>Sub Total</div>
          <div>
            £
            {data.allSkus.edges.reduce((total, $) => {
              return total + parseFloat($.node.price)
            }, 0)}
          </div>
        </div>

        <div>
          <div>Shipping</div>
          <div>£0</div>
        </div>

        <div>
          <div style={{ fontWeight: 'bold' }}>Total</div>
          <div>
            £
            {data.allSkus.edges.reduce((total, $, i) => {
              return total + parseFloat($.node.price * items[i].quantity)
            }, 0)}
          </div>
        </div>
      </Total>
    </div>
  )
}
