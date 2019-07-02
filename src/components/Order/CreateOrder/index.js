import React from 'react'
import { PaymentDetails } from './styled'

import CreateOrderCta from './Cta'
import Address from './Address'
import PersonalDetails from './PersonalDetails'

import Title from '../../../components/Title'

const CreateOrder = () => {
  return (
    <PaymentDetails>
      <div>
        <Title title={'Personal Details'} />
        <PersonalDetails />
      </div>

      <div>
        <Title title={'Shipping Details'} />
        <Address />
      </div>

      <div />
    </PaymentDetails>
  )
}

export { CreateOrder, CreateOrderCta }
