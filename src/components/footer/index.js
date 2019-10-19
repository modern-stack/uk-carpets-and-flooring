import React from 'react'
import Link from 'gatsby-link'
import { FaHeart } from 'react-icons/fa'

import Social from '../Social'
import { Footer, Content, Links, Title, BuiltBy } from './styled'

export default () => (
  <Footer>
    <Content>
      <Links>
        <Link to="/carpets">Carpets</Link>
        <Link to="/laminates">Laminates</Link>
        <Link to="/vinyls">Vinyls</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/wishlist">My Wishlist</Link>
        <Link to="/shipping">Shipping</Link>
        <Link to="/how-to-order">How to order</Link>
        <Link to="/faqs">Faqs</Link>
      </Links>
    </Content>
    <Content>
      <div>
        <Title>Contact Info</Title>
        <div>Unit 27 </div>
        <div>Sutton oak drive</div>
        <div>St. Helens</div>
        <div>WA9 3PH</div>
        <br />

        <div>01744 345382</div>
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
      <br />
      <a href={'https://hardcore-morse-1a0115.netlify.com/'}>Hire us!</a>
    </BuiltBy>
  </Footer>
)
