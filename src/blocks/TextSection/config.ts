import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const TextSection: Block = {
  slug: 'textSection',
  interfaceName: 'TextSectionBlock',
  labels: {
    singular: 'Text Section',
    plural: 'Text Sections',
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'color',
      type: 'text',
      defaultValue: '#636363',
    },
    {
      name: 'fontSize',
      type: 'text',
      defaultValue: '18px',
    },
    {
      name: 'textAlign',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'bold',
      type: 'checkbox',
      defaultValue: false,
    },
    createSpacingFields(blockSpacing.textSection),
  ],
}
