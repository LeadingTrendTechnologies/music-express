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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          admin: {
            description: 'Optional. Overrides the alt text from the media item.',
          },
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
