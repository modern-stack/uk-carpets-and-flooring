import React, { useState } from 'react'
import Autocomplete from '../../../../Autocomplete'
import Suggestions from './Suggestions'
import { EditAddress, Search } from './styled'

const filterAddress = ({
  line_1,
  line_2,
  locality,
  town_or_city,
  country,
  post_code,
}) => {
  return {
    line1: line_1,
    line2: line_2,
    state: locality,
    city: town_or_city,
    country: country,
    post_code,
  }
}

function valid_postcode(postcode) {
  postcode = postcode.replace(/\s/g, '')
  var regex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/i
  return regex.test(postcode)
}

async function searchPostcode($, setLoading, setAddress) {
  const isValid = valid_postcode($)

  if (!isValid) {
    setAddress({
      message: null,
      addresses: null,
    })
  }

  if (isValid) {
    setLoading(true)
    const payload = await fetch(
      `https://api.getAddress.io/find/${$}?Expand=true&api-key=${
        process.env.GATSBY_GETADDRESS_API_KEY
      }`
    )

    const { addresses, postcode, Message } = await payload.json()

    setAddress({
      message: Message,
      addresses: addresses
        ? addresses.map($ => filterAddress({ ...$, post_code: postcode }))
        : [],
    })
    setLoading(false)
  }
}

export default () => {
  // const [{ order }, dispatch] = useStateValue()
  // const [loading, setLoading] = useState(false)

  const [{ addresses, message }, setAddress] = useState({
    addresses: null,
    message: null,
  })

  return (
    <EditAddress>
      <Search>
        {/* <Autocomplete
          loading={loading}
          onChange={async $ => await searchPostcode($, setLoading, setAddress)}
          Content={
            <Suggestions
              suggestions={addresses}
              error={message}
              onSelect={$ =>
                dispatch({
                  type: 'Order:UpdateShipping',
                  payload: { address: $ },
                })
              }
            />
          }
        /> */}
      </Search>
    </EditAddress>
  )
}
