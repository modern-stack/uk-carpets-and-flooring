import React from 'react'

import { Specification, Content, Icons } from './styled'
import MappedIcons from './Icons'

import Title from '../../../components/Title'
import Section from './Section'

export default ({ product, sku }) => {
  const { data } = sku

  const IconList = (data.icons || '')
    .toLowerCase()
    .replace(/ /g, '')
    .split(',')

  console.log('IconList', data.icons, IconList)

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
              title: 'Backing',
              value: data.backing ? data.backing.split(',').join(' & ') : null,
            },
            {
              title: 'Wide',
              value: data.wide,
            },
            {
              title: 'Suitability',
              value: data.suitability,
            },
          ]}
          product={data}
        />
        <div />
        <div>
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
          <Icons>
            {IconList.length &&
              IconList.map($ => {
                const Icon = MappedIcons[$]
                console.log('Checking >>>>', Icon, $)
                return Icon ? <Icon /> : null
              })}
          </Icons>
        </div>
      </Content>
    </Specification>
  )
}
