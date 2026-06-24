import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const FeatureCards: Block = {
  slug: 'featureCards',
  interfaceName: 'FeatureCardsBlock',
  labels: {
    singular: 'Feature Cards',
    plural: 'Feature Cards',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'mediaType',
          type: 'select',
          defaultValue: 'image',
          options: [
            { label: 'YouTube', value: 'youtube' },
            { label: 'Image', value: 'image' },
          ],
        },
        {
          name: 'youtubeId',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.mediaType === 'youtube',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.mediaType === 'image',
          },
        },
        {
          name: 'imageAlt',
          type: 'text',
          admin: {
            description: 'Optional. Overrides the alt text from the media item.',
            condition: (_, siblingData) => siblingData?.mediaType === 'image',
          },
        },
        {
          name: 'buttonLabel',
          type: 'text',
          defaultValue: 'Learn More',
        },
        {
          name: 'buttonHref',
          type: 'text',
        },
        {
          name: 'buttonExternal',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'extraButtonLabel',
          type: 'text',
        },
        {
          name: 'extraButtonHref',
          type: 'text',
        },
      ],
    },
    createSpacingFields(blockSpacing.featureCards),
  ],
}
