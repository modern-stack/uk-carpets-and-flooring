import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import Subtitle from '../Subtitle'

import { Sku, ImageContainer, Total } from './styled'

import { GET_ORDER_ITEMS } from '../../../services/Apollo/Queries/order'

export default ({ items }) => {
  const { data, loading } = useQuery(GET_ORDER_ITEMS, {
    variables: {
      Items: items.map($ => $.parent).concat(['']),
    },
  })

  if (loading) return null

  console.log('Items >>>>', items)

  console.log('Data >>>>', data)

  return (
    <div>
      <br />
      <br />
      <Subtitle>
        <div>your order</div>
      </Subtitle>

      {items.map(($, i) => {
        const { node } = data.allSkus.edges.filter(
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
              <h2>
                <span>
                  {node.product.name} {$.description}
                </span>
              </h2>
              <div class={'title'}>{node.name[0].text}</div>
            </div>

            <div>
              <input type={'number'} value={$.quantity} />
            </div>
            <div>£{$.amount}</div>
          </Sku>
        )
      })}
      <Total>
        <div>
          <div>Sub Total</div>
          <div>
            £
            {items.reduce((total, $) => {
              return total + parseFloat($.amount)
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
            {items.reduce((total, $) => {
              return total + parseFloat($.amount)
            }, 0)}
          </div>
        </div>
      </Total>
    </div>
  )
}
