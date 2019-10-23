import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

import { Autocomplete, Search } from './styled'

export default ({ onChange, loading = true, Content }) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  return (
    <Autocomplete>
      <Search loading={loading}>
        <input
          type="text"
          onChange={e => {
            setShowSuggestions(true)
            return onChange(e.target.value)
          }}
          placeholder={'Enter postcode'}
        />
        <FaSpinner />
      </Search>

      {React.cloneElement(Content)}
    </Autocomplete>
  )
}
