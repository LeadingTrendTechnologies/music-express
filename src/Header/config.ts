import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logoUrl',
      type: 'text',
      defaultValue: '/icons/logo.png',
      admin: { description: 'URL or path of the header logo image.' },
    },
    {
      name: 'taglineUrl',
      type: 'text',
      defaultValue: '/icons/tagline.png',
      admin: { description: 'URL or path of the centered tagline image.' },
    },
    {
      name: 'phone',
      type: 'text',
      defaultValue: '574-536-7147',
    },
    {
      name: 'facebookUrl',
      type: 'text',
      defaultValue: 'https://facebook.com/',
    },
    {
      name: 'twitterUrl',
      type: 'text',
      defaultValue: 'https://twitter.com/',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 8,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
