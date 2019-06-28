import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'
import { FaUserAlt, FaEnvelope } from 'react-icons/fa'
import { PersonalDetails } from './styled'

import ProfileImage from '../../../ProfileImage'

import { UPDATE_ORDER } from '../../../../services/Apollo/Mutations/order'
import { GET_ORDER } from '../../../../services/Apollo/Queries/order'

import { SUBSCRIBE_USER } from '../../../../services/Apollo/Queries/auth'

export default () => {
  const { data, loading } = useQuery(SUBSCRIBE_USER)
  if (loading) return <div>Loading..</div>

  const getOrder = useQuery(GET_ORDER)

  const [{ name, email }, setPersonalDetails] = useState({
    name:
      getOrder.data.Order.name ||
      `${data.CurrentUser.given_name} ${data.CurrentUser.family_name}`,
    email: getOrder.data.Order.email || data.CurrentUser.email,
  })

  const updateEmail = useMutation(UPDATE_ORDER, {
    variables: {
      Order: data.Order,
      toUpdate: { email },
    },
  })

  const updateShippingName = useMutation(UPDATE_ORDER, {
    variables: {
      Order: data.Order,
      toUpdate: {
        shipping: {
          ...getOrder.data.Order.shipping,
          name,
        },
      },
    },
  })

  useEffect(() => {
    updateEmail()
    updateShippingName()
  })

  return (
    <PersonalDetails>
      <div>
        <ProfileImage />
      </div>
      <div>
        <FaUserAlt size={24} />
        <input
          type={'text'}
          placeholder={'Name'}
          value={name}
          onChange={e => setPersonalDetails({ email, name: e.target.value })}
        />
      </div>
      <div>
        <FaEnvelope size={24} />
        <input
          type={'text'}
          placeholder={'Please enter an Email address'}
          value={email}
          onChange={e => setPersonalDetails({ name, email: e.target.value })}
        />
      </div>
    </PersonalDetails>
  )
}
