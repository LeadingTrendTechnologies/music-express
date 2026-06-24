import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const ClientsGrid: Block = {
  slug: 'clientsGrid',
  interfaceName: 'ClientsGridBlock',
  labels: {
    singular: 'Clients Grid',
    plural: 'Clients Grids',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'title',
      options: [
        { label: 'Title (large uppercase)', value: 'title' },
        { label: 'Heading (lowercase)', value: 'heading' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'moreText',
      type: 'text',
    },
    createSpacingFields(blockSpacing.clientsGrid),
  ],
}
