import React, { useState, useEffect } from 'react'
import firebase from 'firebase'

function Authentication({ children }) {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyDfvd_dw-ZOx6WMhjLb42I-cVjtH0EMoXs',
      authDomain: 'carpets-at-home-1490007435412.firebaseapp.com',
      databaseURL: 'https://carpets-at-home-1490007435412.firebaseio.com',
      projectId: 'carpets-at-home-1490007435412',
    })
  }
  return <div>{children}</div>
}

export default Authentication
