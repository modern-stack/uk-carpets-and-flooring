import React, { useState } from 'react'
import { Primary, Tertiary } from '../../Button'
import Modal from '../../Modal'

import Login from './Login'

import useFirebase from '../../../Hooks/Firebase/useFirebase'

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  const { loading, auth, authUser } = useFirebase()

  if (loading) return null

  console.log('currentUser >>>', authUser)

  return (
    <React.Fragment>
      {authUser && (
        <Tertiary onClick={() => auth().signOut()}>Log Out</Tertiary>
      )}

      {!authUser && (
        <Primary onClick={() => setIsOpen(!isOpen)}>Log In</Primary>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Login />
      </Modal>
    </React.Fragment>
  )
}
