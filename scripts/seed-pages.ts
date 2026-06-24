import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

import { homeStatic } from '../src/endpoints/seed/home-static'
import { aboutStatic } from '../src/endpoints/seed/about-static'
import { clientsStatic } from '../src/endpoints/seed/clients-static'
import { equipmentStatic } from '../src/endpoints/seed/equipment-static'
import { contactFormMX, contactPageMX } from '../src/endpoints/seed/contact-mx'

const run = async () => {
  const payload = await getPayload({ config })

  // Upsert the editable contact form (Forms collection), then build the
  // contact page layout referencing it.
  const existingForm = await payload.find({
    collection: 'forms',
    where: { title: { equals: contactFormMX.title } },
    limit: 1,
    pagination: false,
  })

  let contactFormId: number | string
  if (existingForm.docs.length > 0) {
    const updated = await payload.update({
      collection: 'forms',
      id: existingForm.docs[0].id,
      data: contactFormMX,
    })
    contactFormId = updated.id
    payload.logger.info(`Updated form: ${contactFormMX.title}`)
  } else {
    const created = await payload.create({
      collection: 'forms',
      data: contactFormMX,
    })
    contactFormId = created.id
    payload.logger.info(`Created form: ${contactFormMX.title}`)
  }

  const pages = [
    homeStatic,
    aboutStatic,
    clientsStatic,
    equipmentStatic,
    contactPageMX(contactFormId),
  ]

  for (const data of pages) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: data.slug } },
      limit: 1,
      pagination: false,
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data,
        context: { disableRevalidate: true },
      })
      payload.logger.info(`Updated page: ${data.slug}`)
    } else {
      await payload.create({
        collection: 'pages',
        data,
        context: { disableRevalidate: true },
      })
      payload.logger.info(`Created page: ${data.slug}`)
    }
  }

  const navItems = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about-us' },
    { label: 'Clients', url: '/clients' },
    { label: 'Equipment', url: '/equipment' },
    { label: 'Studio', url: '/studio' },
    { label: 'Contact Us', url: '/contact-us' },
  ].map(({ label, url }) => ({
    link: { type: 'custom' as const, url, label },
  }))

  await payload.updateGlobal({
    slug: 'header',
    data: {
      logoUrl: '/icons/logo.png',
      taglineUrl: '/icons/tagline.png',
      phone: '574-536-7147',
      facebookUrl: 'https://facebook.com/',
      twitterUrl: 'https://twitter.com/',
      navItems,
    },
    context: { disableRevalidate: true },
  })
  payload.logger.info('Updated header global.')

  await payload.updateGlobal({
    slug: 'footer',
    data: {
      logoUrl: '/icons/footer-logo.png',
      phone: '574-536-7147',
      facebookUrl: 'https://facebook.com/',
      companyName: 'Music Express',
      navItems: [],
    },
    context: { disableRevalidate: true },
  })
  payload.logger.info('Updated footer global.')

  payload.logger.info('Done seeding pages.')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
