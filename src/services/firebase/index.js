import firebase from 'firebase'

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
      this.auth = firebase.auth()
      this.db = firebase.database()

      this.SignIn = () => {
        console.log(config)

        firebase
          .auth()
          .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      }

      this.createTestimonial = async testimonial => {
        const id = firebase
          .database()
          .ref()
          .child('testimonials')
          .push().key
        return this.db.ref(`testimonials/${id}`).set(testimonial)
      }

      this.allTestimonials = async () =>
        firebase
          .database()
          .ref(`testimonials`)
          .once('value')
          .then($ => [...Object.values($.val() || [])])
    }
  }
}

export default new Firebase()
