import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const HeadingSection: Block = {
  slug: 'headingSection',
  interfaceName: 'HeadingSectionBlock',
  labels: {
    singular: 'Heading Section',
    plural: 'Heading Sections',
  },
  fields: [
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'level',
      type: 'select',
      defaultValue: '2',
      options: [
        { label: 'H2', value: '2' },
        { label: 'H3', value: '3' },
      ],
    },
    {
      name: 'color',
      type: 'text',
      defaultValue: '#192438',
    },
    {
      name: 'fontSize',
      type: 'text',
      defaultValue: '36px',
    },
    {
      name: 'textAlign',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    createSpacingFields(blockSpacing.headingSection),
  ],
}
