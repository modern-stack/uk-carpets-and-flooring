import React from 'react'
import { FaUserAlt, FaEnvelope } from 'react-icons/fa'
import { PersonalDetails, ProfileImage } from './styled'

import { useStateValue } from '../../../Context'

export default () => {
  const [{ order, user }, dispatch] = useStateValue()

  console.log('>>> user', user)

  return (
    <PersonalDetails>
      <div>
        <ProfileImage src={user.picture} />
      </div>
      <div>
        <FaUserAlt size={24} />
        <input
          type={'text'}
          placeholder={'Name'}
          value={order.shipping ? order.shipping.name : ''}
          onChange={e =>
            dispatch({
              type: 'Order:UpdateShipping',
              payload: { name: e.target.value },
            })
          }
        />
      </div>
      <div>
        <FaEnvelope size={24} />
        <input
          type={'text'}
          placeholder={'Email'}
          value={order.email}
          onChange={e =>
            dispatch({
              type: 'Order:Update',
              payload: { email: e.target.value },
            })
          }
        />
      </div>
    </PersonalDetails>
  )
}
