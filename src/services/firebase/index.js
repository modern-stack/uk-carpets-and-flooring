// ./src/services/firebase.js
import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDfvd_dw-ZOx6WMhjLb42I-cVjtH0EMoXs',
  authDomain: 'carpets-at-home-1490007435412.firebaseapp.com',
  databaseURL: 'https://carpets-at-home-1490007435412.firebaseio.com',
  projectId: 'carpets-at-home-1490007435412',
}

class Firebase {
  constructor() {
    if (typeof window !== 'undefined') {
      firebase.initializeApp(config)
      this.store = firebase.firestore
      this.auth = firebase.auth()
      this.db = firebase.database()
    }
  }
}

export default new Firebase()
