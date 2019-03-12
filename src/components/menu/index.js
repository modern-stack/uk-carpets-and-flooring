import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { FaBars, FaTimes, FaHeart, FaShoppingBasket } from 'react-icons/fa'
import {
  Menu,
  MenuItem,
  SubMenu,
  MobileMenu,
  MobileSubMenu,
  MobileSubMenuContent,
  Container,
  Options,
  OptionContainer,
  OptionImage,
} from './styled'

import firebase from '../../services/firebase'

export default () => {
  const [active, setActive] = useState(false)
  const [user, setUser] = useState()

  useEffect(() => {
    //firebase.auth.onAuthStateChanged($ => setUser($))
  }, [])

  return (
    <React.Fragment>
      {/* <Menu>
        <MenuItem to="/">
          <span>Home</span>
        </MenuItem>
        <MenuItem to="/carpets">
          Carpets
          <SubMenu>
            <div>stuff</div>
            <div>more stuff</div>
          </SubMenu>
        </MenuItem>
        <MenuItem to="/laminates">Laminates</MenuItem>
        <MenuItem to="/vinyls">Vinyls</MenuItem>
        <MenuItem to="/accessories">Accessories</MenuItem>
      </Menu>
      <MobileMenu>
        <Container>
          <MenuItem to="/carpets">Carpets</MenuItem>
          <MenuItem to="/laminates">Laminates</MenuItem>
          <MenuItem to="/vinyls">Vinyls</MenuItem>
        </Container>
        <Container>
          <MenuItem onClick={() => setActive(!active)}>
            {active ? <FaTimes /> : <FaBars />}
          </MenuItem>
        </Container>
      </MobileMenu>
      <MobileSubMenu active={active}>
        <MobileSubMenuContent>
          <MenuItem inverted to="/home">
            Carpets>Home
          </MenuItem>
          <MenuItem inverted to="/carpets">
            Carpets>Carpets
          </MenuItem>
          <MenuItem inverted to="/laminates">
            Carpets>Laminates
          </MenuItem>
          <MenuItem inverted to="/flooring">
            Carpets>Flooring
          </MenuItem>
          <MenuItem inverted to="/accessories">
            Carpets>Accessories
          </MenuItem>
          <Options>
            <div>
              <OptionContainer>
                <FaHeart />
              </OptionContainer>
            </div>
            <div>
              <OptionContainer>
                <FaShoppingBasket />
              </OptionContainer>
            </div>
            <div>{user && <OptionImage src={user.photoURL} />}</div>
          </Options>
        </MobileSubMenuContent>
      </MobileSubMenu> */}
      <Link to={'/carpets'}>Clicky</Link>
    </React.Fragment>
  )
}
