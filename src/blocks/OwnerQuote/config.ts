import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const OwnerQuote: Block = {
  slug: 'ownerQuote',
  interfaceName: 'OwnerQuoteBlock',
  labels: {
    singular: 'Owner Quote',
    plural: 'Owner Quotes',
  },
  fields: [
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Owner photo.',
      },
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'text',
    },
    createSpacingFields(blockSpacing.ownerQuote),
  ],
}
