import React from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { Address } from './styled'

import PostCodeSearch from './PostCodeSearch'
import ManualSearch from './ManualSearch'
import Completed from './Completed'

import { Input, ErrorMessage } from '../../../components/Form'

import { GET_ADDRESS_CONFIRMED } from '../../../services/Apollo/Queries/order'
import { TOGGLE_CONFIRMED_ADDRESS } from '../../../services/Apollo/Mutations/order'

export default ({ order, useManual, update, register, errors }) => {
  const { email, shipping } = order
  const { data } = useQuery(GET_ADDRESS_CONFIRMED)
  const ToggleConfirmedAddress = useMutation(TOGGLE_CONFIRMED_ADDRESS)

  if (data.ConfirmedAddress) return <Completed order={order} />

  console.log('errors >>>>', errors)
  console.log('shipping.name >>>>', shipping.name)

  return (
    <Address>
      <Input
        validationFailed={!!errors.name}
        type={'text'}
        name={'name'}
        placeholder={'Name'}
        ref={register({ required: 'Please enter a Name' })}
        onChange={e =>
          update({
            shipping: { ...order.shipping, name: e.target.value },
          })
        }
        defaultValue={shipping.name}
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

      <Input
        type={'text'}
        placeholder={'Please enter an Email address'}
        ref={register({ required: 'Please enter a valid Email Address' })}
        onChange={e => update({ email: e.target.value })}
        defaultValue={email}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      {useManual ? (
        <ManualSearch
          shipping={order.shipping}
          update={update}
          confirm={ToggleConfirmedAddress}
          register={register}
          errors={errors}
        />
      ) : (
        <PostCodeSearch
          shipping={order.shipping}
          update={update}
          confirm={ToggleConfirmedAddress}
        />
      )}
    </Address>
  )
}
