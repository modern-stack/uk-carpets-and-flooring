import React from 'react'
import { Modal, CloseButton } from './styled'

export default ({ children, onClose, isOpen }) => {
  const Component = React.cloneElement(children, { onClose })

  return (
    <Modal isOpen={isOpen}>
      <div class="overlay" onClick={() => onClose()}>
        <div
          class="content"
          onClick={e => {
            e.stopPropagation()
            console.log('Clicky 1')
          }}
        >
          <CloseButton onClick={() => onClose()}>X</CloseButton>
          {Component}
        </div>
      </div>
    </Modal>
  )
}
