import React from 'react'
import { Primary } from '../../../Button'

export default ({ onComplete, text = 'Continue to Payment' }) => (
  <Primary onClick={() => onComplete()}>{text}</Primary>
)
