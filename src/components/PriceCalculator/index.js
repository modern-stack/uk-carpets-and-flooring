import React from 'react'

import FeetAndInches from './FeetAndInches'
import MetresSquared from './MetresSquared'

const components = {
  ['Feet and Inches']: FeetAndInches,
  ['MetresSquared']: MetresSquared,
}

export default ({ type, price = 1, onChange }) => {
  const Component = components[type] || components['MetresSquared']
  return <Component onChange={onChange} price={price} />
}
