import React, { useState } from 'react'
import {
  ProductFilter,
  Title,
  SubTitle,
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

export default ({ filters, selected, setSelected }) => (
  <ProductFilter>
    <Title>Filter By</Title>
    {Object.entries(filters).map(([name, options]) => (
      <Selection>
        {console.log(selected, name)}
        <OptionHeader>
          <div>{name}</div>
          <div>Dash</div>
        </OptionHeader>
        {console.log('options >>>>', filters)}
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
