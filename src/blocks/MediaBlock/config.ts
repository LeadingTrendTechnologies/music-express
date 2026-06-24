import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    createSpacingFields(blockSpacing.mediaBlock),
  ],
}
