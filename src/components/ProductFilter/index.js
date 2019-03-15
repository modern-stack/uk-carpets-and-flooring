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

export default () => (
  <ProductFilter>
    <Title>Filter By</Title>
    <Selection>
      <OptionHeader>
        <div>Color</div>
        <div>Dash</div>
      </OptionHeader>
      <Option>
        <Selected selected /> Light(17)
      </Option>
      <Option>
        <Selected /> Light(17)
      </Option>
      <Option>
        <Selected /> Light(17)
      </Option>
      <Option>
        <Selected /> Light(17)
      </Option>
      <Option>
        <Selected /> Light(17)
      </Option>
    </Selection>
    <Selection>
      <Option>
        <Selected />
      </Option>
    </Selection>

    <Selection>
      <OptionHeader>
        <div>traditional Woods</div>
        <div>Dash</div>
      </OptionHeader>
      <Option>
        <Selected /> Light(17)
      </Option>
      <Option>
        <Selected /> Light(17)
      </Option>
      <Option>
        <Selected /> Light(17)
      </Option>
      <Option>
        <Selected /> Light(17)
      </Option>
      <Option>
        <Selected /> Light(17)
      </Option>
    </Selection>
  </ProductFilter>
)
