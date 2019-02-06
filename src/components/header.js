import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import firebase from '../services/firebase'

const Header = ({ siteTitle }) => {
  const [user, setUser] = useState([])

  useEffect(async () => {
    console.log('Firebae >>>>>>', firebase)
    firebase.auth.onAuthStateChanged($ => setUser($))
  }, [])

  return (
    <div
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>

        <div>
          {user ? (
            <div onClick={() => firebase.auth.signOut()}>SignOut</div>
          ) : (
            <div
              onClick={() =>
                firebase.auth.signInWithEmailAndPassword(
                  'test@test.com',
                  'testpassword'
                )
              }
            >
              SignIn
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
