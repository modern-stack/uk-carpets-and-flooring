import React from 'react'

import Image from '../../Image'

export default ({ primary }) => (
  <Image
    style={{ height: '60vh', position: 'unset' }}
    objectFit="cover"
    objectPosition="50% 50%"
    {...primary.image.localFile.childImageSharp}
  />
)
