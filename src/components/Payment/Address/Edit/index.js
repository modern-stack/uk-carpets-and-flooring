import React, { useState } from 'react'
import { FaToggleOn, FaToggleOff } from 'react-icons/fa'

import { Edit, Toggle } from './styled'
import PostCodeSearch from './PostCodeSearch'
import ManualSearch from './ManualSearch'

export default () => {
  const [isManual, setIsManual] = useState(false)

  const toggle = () => setIsManual(!isManual)

  return (
    <Edit>
      {isManual ? <ManualSearch /> : <PostCodeSearch />}
      <Toggle>
        {isManual ? (
          <FaToggleOn size={24} onClick={() => toggle()} />
        ) : (
          <FaToggleOff size={24} onClick={() => toggle()} />
        )}
      </Toggle>
    </Edit>
  )
}
