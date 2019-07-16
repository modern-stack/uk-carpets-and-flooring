import React from 'react'
import { Modal } from './styled'

export default ({ children }) => (
  <Modal>
    <div class="content">{children}</div>
  </Modal>
)
