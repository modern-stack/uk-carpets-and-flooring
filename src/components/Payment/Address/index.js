import React, { useState } from 'react;'
import Address from './styled'

async function searchAddress(number, postcode, setAddressDetails) {
  await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${number}+${postcode}&key=${
      process.env.GATSBY_GOOGLE_PLACES_API_KEY
    }`
  )

  const payload = $
}

export default () => {
  const [addressDetails, setAddressDetails] = useState({})

  return (
    <Address>
      <input type="text" placeholder={'Enter Postcode'} />
    </Address>
  )
}
