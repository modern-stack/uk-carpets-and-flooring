import React from 'react'
import { FaSpinner } from 'react-icons/fa'

import { Autocomplete, Search } from './styled'

export default ({ onChange, loading = true, Content }) => (
  <Autocomplete>
    <Search loading={loading}>
      <input
        type="text"
        onChange={e => onChange(e.target.value)}
        placeholder={'Enter postcode'}
      />
      <FaSpinner />
    </Search>

    {React.cloneElement(Content)}
  </Autocomplete>
)
