import React, { useState } from 'react'

import { Edit } from './styled'
import PostCodeSearch from './PostCodeSearch'
import ManualSearch from './ManualSearch'

export default () => {
  return (
    <Edit>
      <PostCodeSearch />
      <ManualSearch />
    </Edit>
  )
}
