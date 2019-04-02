import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa'

import { Social } from './styled'

export default () => (
  <Social>
    <FaInstagram style={{ height: '20px', width: '20px' }} />
    <FaFacebook style={{ height: '20px', width: '20px' }} />
    <FaTwitter style={{ height: '20px', width: '20px' }} />
  </Social>
)
