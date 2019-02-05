import firebase from 'firebase'

class Firebase {
  constructor() {
    if (typeof window !== 'undefined') {
      return null
    }

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDfvd_dw-ZOx6WMhjLb42I-cVjtH0EMoXs',
        authDomain: 'carpets-at-home-1490007435412.firebaseapp.com',
        databaseURL: 'https://carpets-at-home-1490007435412.firebaseio.com',
        projectId: 'carpets-at-home-1490007435412',
      })

      return {
        auth: firebase.auth(),
        db: firebase.database(),
      }
    }
  }
}

function getFirebase() {
  const instance = new Firebase()

  return {
    ...instance,
  }
}

export default getFirebase()
