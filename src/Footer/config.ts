import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logoUrl',
      type: 'text',
      defaultValue: '/icons/footer-logo.png',
      admin: { description: 'URL or path of the footer logo image.' },
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
      name: 'companyName',
      type: 'text',
      defaultValue: 'Music Express',
      admin: { description: 'Shown in the copyright line: © {year} {companyName}.' },
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
