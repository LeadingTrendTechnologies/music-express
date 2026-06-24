import type { RequiredDataFromCollectionSlug } from 'payload'

import { mediaId } from './assets'

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'none',
  },
  meta: {
    description:
      'Professional sound, lighting, video, and production services in Indiana and Michigan.',
    title: 'Music Express - Sound, Lighting, Video & Production',
  },
  title: 'Home',
  layout: [
    {
      blockName: 'Service Hero',
      blockType: 'serviceHero',
      ctaLine1: 'WE CAN help',
      ctaLine2: 'contact us today',
      headlines: [
        { label: 'sound' },
        { label: 'lighting' },
        { label: 'video' },
        { label: 'production' },
      ],
      backgroundImage: mediaId('5b53b03de359245f9a8dc5acf9845455'),
      galleryImages: [
        { image: mediaId('66ee98dd12f0f06f4fd2b3b6208dd9a5')! },
        { image: mediaId('7f5ab9bdd164a4b08fb06f28cd956cb5')! },
        { image: mediaId('4d1976a30fe3ca903d7dbc5a36e94b93')! },
        { image: mediaId('ddfa1bbc8e588ab2e750bee7b60cb217')! },
        { image: mediaId('13841a6b68748cc54dc21b21916bbd8f')! },
        { image: mediaId('22af1e583edc9b486847f3d5186fc914')! },
        { image: mediaId('04406270cfa3c87ea0d9fd740e037a62')! },
        { image: mediaId('0718926b80b5d4c4fdc2a7e34172f426')! },
        { image: mediaId('c662cff33581272f4b62e5b3a397f485')! },
      ],
    },
    {
      blockName: 'Feature Cards',
      blockType: 'featureCards',
      cards: [
        {
          title: 'Seismic audio',
          description:
            "It's now easier than ever for your church or school to move up to a line array system for way less. Contact us to see how.",
          mediaType: 'youtube',
          youtubeId: '6388dAsgc5w',
          buttonLabel: 'Learn More',
          buttonHref: 'https://youtu.be/6388dAsgc5w',
          buttonExternal: true,
        },
        {
          title: 'We can get what you need',
          description: 'We can supply you with the equipment you need for your next event.',
          mediaType: 'image',
          image: mediaId('2fa620451fa2b278d5d9df928277252f'),
          imageAlt: 'Seismic Audio',
          buttonLabel: 'Learn More',
          buttonHref: '/contact-us',
          buttonExternal: false,
        },
        {
          title: 'my dmx 3.0',
          description:
            "ADJ's myDMX 3.0 has a new, robust hardware dongle and exciting new features to take greater command of your lightshow.",
          mediaType: 'youtube',
          youtubeId: 'UPEwaKn4wAo',
          buttonLabel: 'Learn More',
          buttonHref: '/about-us',
          buttonExternal: false,
        },
        {
          title: 'The music kitchen',
          description:
            'Your source of expert advice and how-to resources for musicians, composers, and songwriters.',
          mediaType: 'image',
          image: mediaId('cf29acacf729c64ee66fc8f959fab6e6'),
          imageAlt: 'The Music Kitchen',
          buttonLabel: 'Learn More',
          buttonHref: 'https://www.themusickitchen.com/',
          buttonExternal: true,
          extraButtonLabel: '[ click here ]',
          extraButtonHref: '/contact-us',
        },
      ],
    },
    {
      blockName: 'Service Area',
      blockType: 'serviceArea',
      cities:
        'South Bend, Goshen, Elkhart, Mishawaka, Ft Wayne, Kokomo, Indianapolis, Detroit, Sturgis, Kalamazoo, Three Rivers, Warsaw',
      tagline: "WE'LL BE THERE.",
      states: 'INDIANA. MICHIGAN.',
      ctaLabel: 'Contact Us Today',
      ctaHref: '/contact-us',
    },
  ],
}
