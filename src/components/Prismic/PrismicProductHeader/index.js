import React from 'react'

import Title from '../../Title'

export default ({ primary }) => (
  <Title title={primary.title.text} subTitle={primary.subtitle.text} />
)
