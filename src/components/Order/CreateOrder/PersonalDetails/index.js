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

  console.log('Curent Order >>', getOrder.data.Order)

  const [personalDetails, setPersonalDetails] = useState({
    name:
      getOrder.data.Order.shipping.name ||
      `${data.CurrentUser.given_name} ${data.CurrentUser.family_name}`,
    email: getOrder.data.Order.email || data.CurrentUser.email,
  })

  const { name, email } = personalDetails

  console.log('>>>>>', name, email)

  const updateEmail = useMutation(UPDATE_ORDER, {
    variables: {
      toUpdate: { email },
    },
  })

  const updateShippingName = useMutation(UPDATE_ORDER, {
    variables: {
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
          onChange={e =>
            setPersonalDetails({ ...personalDetails, name: e.target.value })
          }
          defaultValue={name}
        />
      </div>
      <div>
        <FaEnvelope size={24} />
        <input
          type={'text'}
          placeholder={'Please enter an Email address'}
          value={email}
          onChange={e =>
            setPersonalDetails({ ...personalDetails, email: e.target.value })
          }
          defaultValue={email}
        />
      </div>
    </PersonalDetails>
  )
}
