import type { RequiredDataFromCollectionSlug } from 'payload'

import { mediaId } from './assets'

export const aboutStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'about-us',
  _status: 'published',
  hero: {
    type: 'none',
  },
  meta: {
    description:
      'Music Express is a client-minded sound, lighting, video, and production company serving Indiana and Michigan since 1996.',
    title: 'About Us - Music Express',
  },
  title: 'About Us',
  layout: [
    {
      blockName: 'Page Header',
      blockType: 'pageHeader',
      title: 'About Us',
    },
    {
      blockName: 'Intro',
      blockType: 'textSection',
      content:
        'We are a "client-minded" company. This means that we work diligently to relate to our clients and understand their overall goals and objectives so that we can deliver professional events and installations that live up to their expectations. We partner with our clients throughout the entire process. We feel that working with a partner you know and trust makes all the difference.',
      color: '#636363',
      fontSize: '18px',
      textAlign: 'left',
      bold: false,
    },
    {
      blockName: 'Headline 1',
      blockType: 'textSection',
      content:
        'Music Express can provide the right equipment to make your next event perfect.',
      color: '#000080',
      fontSize: '28px',
      textAlign: 'center',
      bold: true,
    },
    {
      blockName: 'Headline 2',
      blockType: 'textSection',
      content:
        'We have production for large concerts & conferences, to small events & gatherings. Music Express has been in business since 1996.',
      color: '#000080',
      fontSize: '28px',
      textAlign: 'center',
      bold: true,
    },
    {
      blockName: 'Owner',
      blockType: 'ownerQuote',
      photo: mediaId('0b017a48ba4cfe46b8d503b4d121925e'),
      quote:
        '"We put alot of pride in our relationships. We work hard to understand the event or project before we start. We don\'t try to talk over anyones head. Our goal is to get it right the first time."',
      name: 'Lloyd wileman',
      role: 'OWNER',
    },
    {
      blockName: 'Mission Label',
      blockType: 'headingSection',
      text: 'OUR MISSION',
      level: '3',
      color: '#27afcf',
      fontSize: '36px',
      textAlign: 'center',
    },
    {
      blockName: 'Mission Statement',
      blockType: 'headingSection',
      text: 'to exceed customer expectations by being the leading provider of affordable, responsive, value-added services in the audio visual industry.',
      level: '2',
      color: '#192438',
      fontSize: '36px',
      textAlign: 'center',
    },
  ],
}
