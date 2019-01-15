import firebase from 'firebase'
import { useState, useEffect } from 'react'

const config = require('./credentials.json')

function Firebase() {
  const [firebaseInstance, setFirebaseInstance] = useState(null)

  useEffect(() => {
    setFirebaseInstance(firebase.initializeApp(config), {})
  }, [])

  console.log('firebases >>>> ', firebaseInstance)

  return firebaseInstance
}

export default Firebase
