import React, { useState, useEffect } from 'react'
import firebase from '../../services/firebase'

export default ({ children }) => {
  const [user, setUser] = useState([])
  const [error, setError] = useState(null)
  const [values, setValues] = useState({ email: '', password: '' })

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value.target.value })
  }

  useEffect(async () => {
    firebase.auth.onAuthStateChanged($ => setUser($))
  }, [])

  const CreateUser = async () => {
    const { forename, surname, email, password } = values
    const fbUser = await firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .catch($ => {
        console.log('error >>>>', $)
        setError($.message)
      })

    if (fbUser) {
      firebase.db.ref(`user/${fbUser.user.uid}`).set({
        forename,
        surname,
        stripeId: null,
      })
    }
  }

  return (
    <div>
      {!user && (
        <form>
          <input
            name="name"
            placeholder="first name"
            value={values.user}
            onChange={e => onChange('forename', e)}
          />
          <input
            name="surname"
            placeholder="surname"
            value={values.user}
            onChange={e => onChange('surname', e)}
          />
          <input
            name="email"
            placeholder="e-mail"
            type="email"
            value={values.user}
            onChange={e => onChange('email', e)}
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            value={values.password}
            onChange={e => onChange('password', e)}
          />
          <input type="button" value="click me!" onClick={() => CreateUser()} />

          {error && <div>{error}</div>}
        </form>
      )}
      {user && (
        <div>
          {children} {user.email}
        </div>
      )}
    </div>
  )
}
