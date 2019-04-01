import React from 'react'

import FeetAndInches from './FeetAndInches'
import Metres from './Metres'

const components = {
  ['Feet and Inches']: FeetAndInches,
  ['Width vs Length']: Metres,
}

export default ({ type, setTotal }) => {
  const Component = components[type] || components['Feet and Inches']
  return <Component setTotal={setTotal} />
}
