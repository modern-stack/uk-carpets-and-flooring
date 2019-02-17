import React from 'react'
import Link from 'gatsby-link'

import { FaInstagram, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa'

import { Footer, Content, Links, Title, Social, BuiltBy } from './styled'

export default () => (
  <Footer>
    <Content>
      <Links>
        <Link>Carpets</Link>
        <Link>Laminates</Link>
        <Link>Vinyls</Link>
        <Link>Accessories</Link>
      </Links>
      <Links>
        <Link>Carpets</Link>
        <Link>Laminates</Link>
        <Link>Vinyls</Link>
        <Link>Accessories</Link>
      </Links>
      <Links>
        <Link>Carpets</Link>
        <Link>Laminates</Link>
        <Link>Vinyls</Link>
        <Link>Accessories</Link>
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
        <Social>
          <FaInstagram style={{ height: '20px', width: '20px' }} />
          <FaFacebook style={{ height: '20px', width: '20px' }} />
          <FaTwitter style={{ height: '20px', width: '20px' }} />
        </Social>
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
