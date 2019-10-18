import React, { useState } from 'react'
import { FaRandom, FaPencilAlt } from 'react-icons/fa'
import { useQuery, useMutation } from 'react-apollo-hooks'
import useForm from 'react-hook-form'

import Header from './Header'
import Navigation from './Navigation'
import ShippingDetails from './ShippingDetails'
import PaymentDetails from './PaymentDetails'
import Summary from './Summary'
import Confirmation from './Confirmation'

import { Checkout, Content, Subtitle } from './styled'

import {
  GET_ORDER,
  GET_ADDRESS_CONFIRMED,
} from '../../services/Apollo/Queries/order'
import {
  UPDATE_ORDER,
  TOGGLE_CONFIRMED_ADDRESS,
} from '../../services/Apollo/Mutations/order'

export default () => {
  const [isManual, setIsManual] = useState(false)
  const [confirmed, setConfirmed] = useState(true)
  const { data } = useQuery(GET_ORDER)

  const updateOrder = useMutation(UPDATE_ORDER)
  const ToggleConfirmedAddress = useMutation(TOGGLE_CONFIRMED_ADDRESS)
  const addressConfirmed = useQuery(GET_ADDRESS_CONFIRMED)
  const canEdit = !!addressConfirmed.data.ConfirmedAddress

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  })

  if (confirmed) return <Confirmation setConfirmed={setConfirmed} />

  const update = $ =>
    updateOrder({
      variables: { toUpdate: $ },
      refetchQueries: [{ query: GET_ORDER }],
    })

  const resetOrder = () =>
    update({
      __typename: 'Order',
      email: '',
      shipping: {
        __typename: 'shipping',
        name: '',
        address: {
          __typename: 'address',
          line1: '',
          line2: '',
          city: '',
          state: '',
          country: '',
          postal_code: '',
        },
      },
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
              {canEdit ? (
                <FaPencilAlt
                  style={{ margin: '0 6px', cursor: 'pointer' }}
                  onClick={() => {
                    resetOrder()
                    ToggleConfirmedAddress()
                  }}
                >
                  Clear
                </FaPencilAlt>
              ) : (
                <FaRandom
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsManual(!isManual)}
                />
              )}
            </div>
          </Subtitle>

          <form>
            <ShippingDetails
              order={data.Order}
              useManual={!!isManual}
              update={update}
              register={register}
              errors={errors}
            />

            <Subtitle class="subtitle">payment details</Subtitle>
            <PaymentDetails
              register={register}
              errors={errors}
              onComplete={() => {
                resetOrder()
                setConfirmed(true)
              }}
            />
          </form>
        </div>
        <Summary items={data.Order.items} />
      </Content>
    </Checkout>
  )
}
