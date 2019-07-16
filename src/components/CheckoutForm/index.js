import React, { useState, useEffect } from 'react'
import { FaSnowflake } from 'react-icons/fa'
import { useQuery, useMutation } from 'react-apollo-hooks'

import Header from './Header'
import Navigation from './Navigation'
import ShippingDetails from './ShippingDetails'

import { Checkout, Content, Subtitle } from './styled'

import { GET_ORDER } from '../../services/Apollo/Queries/order'
import { UPDATE_ORDER } from '../../services/Apollo/Mutations/order'

export default () => {
  const [isManual, setIsManual] = useState(false)

  const { data } = useQuery(GET_ORDER)
  const [order, setOrder] = useState(data.Order)

  const updateOrder = useMutation(UPDATE_ORDER, {
    variables: {
      toUpdate: { ...order },
    },
  })

  useEffect(() => {
    updateOrder()
  })

  return (
    <Checkout>
      <Header />
      <Navigation />
      <Content>
        <div>
          <h3>Checkout</h3>
          <Subtitle>
            <div>shipping details</div>
            <div>
              <FaSnowflake onClick={() => setIsManual(!isManual)} />
              <div onClick={() => setOrder({ ...order, shipping: null })}>
                Clear
              </div>
            </div>
          </Subtitle>

          <ShippingDetails
            order={data.Order}
            useManual={!!isManual}
            update={setOrder}
          />
          <Subtitle class="subtitle">payment details</Subtitle>
        </div>
        <div>summary</div>
      </Content>
    </Checkout>
  )
}
