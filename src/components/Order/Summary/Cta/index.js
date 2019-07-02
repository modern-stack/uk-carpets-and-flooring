import React from 'react'
import { Primary } from '../../../Button'

export default ({ onComplete }) => (
  <Primary onClick={() => onComplete()}>Continue to Payment</Primary>
)
