import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const ServiceHero: Block = {
  slug: 'serviceHero',
  interfaceName: 'ServiceHeroBlock',
  labels: {
    singular: 'Service Hero',
    plural: 'Service Heroes',
  },
  fields: [
    {
      name: 'ctaLine1',
      type: 'text',
      defaultValue: 'WE CAN help',
    },
    {
      name: 'ctaLine2',
      type: 'text',
      defaultValue: 'contact us today',
    },
    {
      name: 'headlines',
      type: 'array',
      labels: {
        singular: 'Headline',
        plural: 'Headlines',
      },
      defaultValue: [
        { label: 'sound' },
        { label: 'lighting' },
        { label: 'video' },
        { label: 'production' },
      ],
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'backgroundImageUrl',
      type: 'text',
      admin: {
        description: 'Full URL of the hero background image.',
      },
    },
    {
      name: 'galleryImages',
      type: 'array',
      labels: {
        singular: 'Gallery Image',
        plural: 'Gallery Images',
      },
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    createSpacingFields(blockSpacing.serviceHero),
  ],
}
