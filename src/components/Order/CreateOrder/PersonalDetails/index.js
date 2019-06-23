import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'
import { FaUserAlt, FaEnvelope } from 'react-icons/fa'
import { PersonalDetails, ProfileImage } from './styled'

import { UPDATE_SHIPPING } from '../../../../services/Apollo/Mutations/order'
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

  // const updatePersonalDetails = useMutation(UPDATE_SHIPPING, {
  //   variables: {
  //     Order: data.Order,
  //     Details: { name, email },
  //   },
  //   // refetchQueries: [{ query: GET_ORDER }],
  // })

  useEffect(() => {
    updatePersonalDetails()
  })

  console.log('>>>>', data)

  return (
    <PersonalDetails>
      <div>
        <ProfileImage
          src={
            data.CurrentUser.picture ||
            'http://aux.iconspalace.com/uploads/guest-icon-256.png'
          }
        />
      </div>
      <div>
        <FaUserAlt size={24} />
        <input
          type={'text'}
          placeholder={'Name'}
          value={name}
          // onChange={e =>
          //   dispatch({
          //     type: 'Order:UpdateShipping',
          //     payload: { name: e.target.value },
          //   })
          // }
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
