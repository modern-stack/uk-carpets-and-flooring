import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABSE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
}

class Firebase {
  constructor() {
    if (typeof window !== 'undefined') {
      firebase.initializeApp(config)
      this.store = firebase.firestore
      this.auth = firebase.auth()
      this.db = firebase.database()

      this.SignIn = () => {
        console.log(config)

        firebase
          .auth()
          .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      }

      this.createTestimonial = testimonial =>
        this.db.ref(`testimonials`).set(testimonial)
      this.allTestimonials = async () => {
        const ref = firebase
          .database()
          .ref(`testimonials`)
          .once('value')

        console.log('Ref >>>>')

        return ref.then($ => $.val())
      }
    }
  }
}

export default new Firebase()
