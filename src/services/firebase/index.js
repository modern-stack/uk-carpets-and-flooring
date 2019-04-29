import { initializeApp, auth, database } from 'firebase'

const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABSE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
}

class Firebase {
  constructor() {
    if (typeof window !== 'undefined') {
      initializeApp(config)
      this.auth = auth()
      this.db = database()

      console.log('firebae >>>>', auth, database, initializeApp)

      this.SignIn = () => {
        this.auth.signInWithPopup(new auth.FacebookAuthProvider())
      }

      this.createTestimonial = async testimonial => {
        const id = this.db
          .ref()
          .child('testimonials')
          .push().key
        return this.db.ref(`testimonials/${id}`).set(testimonial)
      }

      this.allTestimonials = async () =>
        this.db
          .ref(`testimonials`)
          .once('value')
          .then($ => [...Object.values($.val() || [])])
    }
  }
}

export default new Firebase()
