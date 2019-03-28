import React, { useState } from 'react'

import { FaPlus, FaMinus } from 'react-icons/fa'

import {
  ProductFilter,
  Title,
  Selection,
  Selected,
  Option,
  OptionHeader,
} from './styled'

function update(setSelected, selected, name, $) {
  isSelected(selected, name, $)
    ? setSelected({
        ...selected,
        [name]: selected[name].filter($$ => $$ !== $),
      })
    : setSelected({ ...selected, [name]: [...selected[name], $] })
}

function isSelected(selected, name, $) {
  return selected[name].includes($)
}

export default ({ filters, selected, setSelected, open }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <ProductFilter open={open}>
      <Title>Filter By</Title>
      {Object.entries(filters).map(([name, options]) => (
        <Selection>
          <OptionHeader>
            <div>{name}</div>
            <div>
              {toggle ? (
                <FaPlus onClick={() => setToggle(!toggle)} />
              ) : (
                <FaMinus onClick={() => setToggle(!toggle)} />
              )}
            </div>
          </OptionHeader>
          {options.map(($, i) => (
            <Option>
              <Selected
                selected={isSelected(selected, name, $.name)}
                onClick={() => update(setSelected, selected, name, $.name)}
              />
              {`${$.name} (${$.count})`}
            </Option>
          ))}
        </Selection>
      ))}
    </ProductFilter>
  )
}
