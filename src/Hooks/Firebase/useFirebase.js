import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import auth from 'firebase/auth'
import database from 'firebase/database'

export default () => {
  const [modules, setModules] = useState(null)
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const config = {
        apiKey: 'AIzaSyBK_Bx8AMCEEnSSaFrZiOBiBI0Luy7yS7I',
        authDomain: 'uk-carpets-and-flooring.firebaseapp.com',
        databaseURL: 'https://uk-carpets-and-flooring.firebaseio.com',
        projectId: 'uk-carpets-and-flooring',
        storageBucket: 'uk-carpets-and-flooring.appspot.com',
        messagingSenderId: '977278834401',
        appId: '1:977278834401:web:fce9804701dd79ca9509a0',
        measurementId: 'G-EJKS04VT9S',
      }

      const { GoogleAuthProvider } = firebase.auth

      if (!firebase.apps.length) {
        const instance = firebase.initializeApp(config)

        setModules({
          database: firebase.database(),
          auth: firebase.auth,
          providers: { GoogleAuthProvider },
          instance: instance,
        })
      }

      const instance = firebase.apps[0]

      setModules({
        database: firebase.database(),
        auth: firebase.auth,
        providers: { GoogleAuthProvider },
        instance: instance,
      })

      const unlisten = firebase.auth().onAuthStateChanged(authUser => {
        authUser ? setAuthUser(authUser) : setAuthUser(null)
      })
      return () => {
        unlisten()
      }
    }
  }, [])

  return {
    loading: !modules,
    ...modules,
    authUser,
  }
}
