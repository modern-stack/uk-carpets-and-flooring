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

export default ({ filters, selected, setSelected }) => (
  <ProductFilter>
    {console.log(selected)}
    <Title>Filter By</Title>
    {Object.entries(filters).map(([name, options]) => (
      <Selection>
        <OptionHeader>
          <div>{name}</div>
          <div>Dash</div>
        </OptionHeader>
        {options.map(($, i) => (
          <Option>
            <Selected
              selected={selected.includes(i)}
              onClick={() =>
                selected.includes($)
                  ? setSelected(selected.filter($$ => $$ !== i))
                  : setSelected({selected, { [name]: [...selected[name], i] }})
              }
            />
            {`${$.name} (${$.count})`}
          </Option>
        ))}
      </Selection>
    ))}
  </ProductFilter>
)
