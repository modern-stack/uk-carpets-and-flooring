import React, { useState } from 'react'
import { Overlay } from './styled'

module.exports = ({ children, open }) => {
  return <Overlay open={open}>{children}</Overlay>
}
