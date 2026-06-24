import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const EquipmentList: Block = {
  slug: 'equipmentList',
  interfaceName: 'EquipmentListBlock',
  labels: {
    singular: 'Equipment List',
    plural: 'Equipment Lists',
  },
  fields: [
    {
      name: 'logos',
      type: 'array',
      labels: {
        singular: 'Logo',
        plural: 'Logos',
      },
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      name: 'groups',
      type: 'array',
      labels: {
        singular: 'Group',
        plural: 'Groups',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
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
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    createSpacingFields(blockSpacing.equipmentList),
  ],
}
