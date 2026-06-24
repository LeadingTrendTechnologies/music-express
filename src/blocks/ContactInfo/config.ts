import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const ContactInfo: Block = {
  slug: 'contactInfo',
  interfaceName: 'ContactInfoBlock',
  labels: {
    singular: 'Contact Info',
    plural: 'Contact Info',
  },
  fields: [
    {
      name: 'phone',
      type: 'text',
      defaultValue: '574-536-7147',
    },
    {
      name: 'email',
      type: 'text',
    },
    createSpacingFields(blockSpacing.contactInfo),
  ],
}
