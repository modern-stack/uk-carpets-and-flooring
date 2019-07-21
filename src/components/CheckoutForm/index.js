import React, { useState, useEffect } from 'react'
import { FaSnowflake, Fa } from 'react-icons/fa'
import { useQuery, useMutation } from 'react-apollo-hooks'

import Header from './Header'
import Navigation from './Navigation'
import ShippingDetails from './ShippingDetails'
import PaymentDetails from './PaymentDetails'
import Summary from './Summary'

import { Checkout, Content, Subtitle } from './styled'

import { GET_ORDER } from '../../services/Apollo/Queries/order'
import { UPDATE_ORDER } from '../../services/Apollo/Mutations/order'

export default () => {
  const [isManual, setIsManual] = useState(false)

  const { data } = useQuery(GET_ORDER)
  const [order, setOrder] = useState(data.Order)

  const updateOrder = useMutation(UPDATE_ORDER)

  const update = () =>
    updateOrder({
      variables: { toUpdate: $ },
      refetchQueries: [{ query: GET_ORDER }],
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
              <div
                onClick={() =>
                  setOrder({
                    shipping: {
                      line1: '',
                      line2: '',
                      state: '',
                      city: '',
                      postal_code: '',
                    },
                  })
                }
              >
                Clear
              </div>
            </div>
          </Subtitle>

          <ShippingDetails
            order={data.Order}
            useManual={!!isManual}
            update={update}
          />

          <Subtitle class="subtitle">payment details</Subtitle>
          <PaymentDetails />
        </div>
        <div>
          <Summary items={data.Order.items} />
        </div>
      </Content>
    </Checkout>
  )
}
