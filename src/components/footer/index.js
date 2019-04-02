import React from 'react'
import Link from 'gatsby-link'
import { FaHeart } from 'react-icons/fa'

import Social from '../Social'
import { Footer, Content, Links, Title, BuiltBy } from './styled'

export default () => (
  <Footer>
    <Content>
      <Links>
        <Link>Carpets</Link>
        <Link>Laminates</Link>
        <Link>Vinyls</Link>
        <Link>Accessories</Link>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
        <Link>My Wishlist</Link>
        <Link>Shipping</Link>
        <Link>How to order</Link>
        <Link>Faqs</Link>
      </Links>
    </Content>
    <Content>
      <div>
        <Title>Contact Info</Title>
        <div>69 Pinfold Drive</div>
        <div>Eccleston</div>
        <div>St Helens</div>
        <div>WA10 5BT</div>
      </div>
    </Content>
    <Content>
      <div>
        <Title>Connect with us</Title>
        <Social />
      </div>
    </Content>
    <BuiltBy>
      <div>
        Built with <FaHeart style={{ color: 'red', padding: '0 8px' }} /> by
        Modern Commerce
      </div>
      <div>Hire us!</div>
    </BuiltBy>
  </Footer>
)
