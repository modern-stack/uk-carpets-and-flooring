import React from 'react'
import { Specification, Content } from './styled'

import Title from '../../../components/Title'
import Section from './Section'

export default ({ product, sku }) => {
  const { data } = sku

  console.log('product >>>>', product)

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
              title: 'Species',
              value: data.species,
            },
            {
              title: 'Gloss',
              value: data.gloss,
            },
            {
              title: 'Edge',
              value: data.edge,
            },
          ]}
          product={data}
        />
        <div />
        <div>
          <Section
            title={'Dimensions'}
            fields={[
              {
                title: 'Size',
                value: `${data.width || 'unknown'} in. wide  x ${data.lengths ||
                  'unknown'} in. Long x ${data.thickness ||
                  'unknown'} mm thick`,
              },
              {
                title: 'Square Feer per Box',
                value: 'Christ Knows?',
              },
            ]}
            product={sku}
          />
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
        </div>
      </Content>
    </Specification>
  )
}
