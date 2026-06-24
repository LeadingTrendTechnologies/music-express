import type { Block } from 'payload'

import { blockSpacing, createSpacingFields } from '../shared/spacing'

export const ServiceArea: Block = {
  slug: 'serviceArea',
  interfaceName: 'ServiceAreaBlock',
  labels: {
    singular: 'Service Area',
    plural: 'Service Areas',
  },
  fields: [
    {
      name: 'cities',
      type: 'textarea',
      defaultValue:
        'South Bend, Goshen, Elkhart, Mishawaka, Ft Wayne, Kokomo, Indianapolis, Detroit, Sturgis, Kalamazoo, Three Rivers, Warsaw',
      admin: {
        description: 'Comma-separated list of cities served.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: "WE'LL BE THERE.",
    },
    {
      name: 'states',
      type: 'text',
      defaultValue: 'INDIANA. MICHIGAN.',
    },
    {
      name: 'ctaLabel',
      type: 'text',
      defaultValue: 'Contact Us Today',
    },
    {
      name: 'ctaHref',
      type: 'text',
      defaultValue: '/contact-us',
    },
    createSpacingFields(blockSpacing.serviceArea),
  ],
}
