import React, { useState, useEffect } from 'react'
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
  const [user, setUser] = useState({})

  useEffect(async () => {
    firebase.auth.onAuthStateChanged($ => setUser($))
  }, [])

  return (
    <React.Fragment>
      <Menu>
        <MenuItem>
          <span>Home</span>
        </MenuItem>
        <MenuItem>
          Carpets
          <SubMenu>
            <div>stuff</div>
            <div>more stuff</div>
          </SubMenu>
        </MenuItem>
        <MenuItem>Laminates</MenuItem>
        <MenuItem>Vinyls</MenuItem>
        <MenuItem>Accessories</MenuItem>
      </Menu>
      <MobileMenu>
        <Container>
          <MenuItem>Carpets</MenuItem>
          <MenuItem>Laminates</MenuItem>
          <MenuItem>Vinyls</MenuItem>
        </Container>
        <Container>
          <MenuItem onClick={() => setActive(!active)}>
            {active ? <FaTimes /> : <FaBars />}
          </MenuItem>
        </Container>
      </MobileMenu>
      <MobileSubMenu active={active}>
        <MobileSubMenuContent>
          <MenuItem inverted>Home</MenuItem>
          <MenuItem inverted>Carpets</MenuItem>
          <MenuItem inverted>Laminates</MenuItem>
          <MenuItem inverted>Flooring</MenuItem>
          <MenuItem inverted>Accessories</MenuItem>
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
            <div>
              <OptionImage src={user.photoURL} />
            </div>
          </Options>
        </MobileSubMenuContent>
      </MobileSubMenu>
    </React.Fragment>
  )
}
