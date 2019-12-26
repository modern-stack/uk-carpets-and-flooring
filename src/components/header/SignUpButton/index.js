import React from 'react'
import { Primary, Tertiary } from '../../Button'
import Modal from '../../Modal'

import Login from './Login'

import { loading, auth } from '../../../Hooks/Firebase/useFirebase'

export default () => {
  const { currentUser } = auth || {}

  if (loading) return null

  if (currentUser) return <Tertiary>Log Out</Tertiary>

  return (
    <Modal>
      <Login />
    </Modal>
  )
}
