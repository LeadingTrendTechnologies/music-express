import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const PageHeader: Block = {
  slug: 'pageHeader',
  interfaceName: 'PageHeaderBlock',
  labels: {
    singular: 'Page Header',
    plural: 'Page Headers',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    createSpacingFields(blockSpacing.pageHeader),
  ],
}
