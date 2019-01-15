import { useState, useEffect } from 'react'

import instance from '../'

export default function() {
  const [user, setUser] = useState(null)

  const firebase = instance()

  useEffect(() => {
    if (firebase) {
      firebase.auth.onAuthStateChanged(authUser => {
        setUser(authUser)
        console.log('Logged in! >>>>', user)
      })
    }
  }, [])

  return user
}
