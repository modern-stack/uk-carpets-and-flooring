import React from 'react'

import { Specification, Content } from './styled'
import { Bed } from './Icons'

import Title from '../../../components/Title'
import Section from './Section'

export default ({ product, sku }) => {
  const { data } = sku

  return (
    <Specification>
      <Title title={'Item Specifications'} />
      <Content>
        <Section
          title={'General'}
          fields={[
            {
              title: 'Collection',
              value: product.product_type,
            },
            {
              title: 'Range',
              value: product.name,
            },
            {
              title: 'Colour',
              value: data.name.text,
            },
            {
              title: 'Pile Content',
              value: data.pile,
            },
            {
              title: 'Width',
              value: data.species,
            },
            {
              title: 'Backing',
              value: data.gloss,
            },
            {
              title: 'Edge',
              value: data.edge,
            },
          ]}
          product={data}
        />
        <div>
          <Bed>
            <a href="info.html">About Us</a>
          </Bed>
        </div>

        <Section
          title={'Warranty'}
          fields={[
            {
              title: 'Residential Warranty',
              value: `${data.residential_warranty} years`,
            },
            {
              title: 'Commercial Warranty',
              value: `${data.commercial_warranty} years`,
            },
          ]}
          product={sku}
        />
      </Content>
    </Specification>
  )
}
