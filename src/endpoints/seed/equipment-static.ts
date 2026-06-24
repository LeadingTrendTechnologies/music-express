import type { RequiredDataFromCollectionSlug } from 'payload'

const NEBULA = '?AccessKeyId=042735BF8B97AAF39122&disposition=0&alloworigin=1'
const img = (id: string) => `https://nebula.wsimg.com/${id}${NEBULA}`

const logoIds = [
  '889af49ab9ce47fa765796db76f2f34c',
  '8050f23f7c3b4df91ec1b5e1e471e561',
  '481feefa34cc59751f754112f661e396',
  '3afe397fc4678073b545b3edff8c0e66',
  '5b1d8293d64caa2b3cbf89e56f90fa33',
  '08314c4cf283894035c07e08c710e634',
  'b2874c763564a1c51bd35046296ff8ee',
  '4689d8f6e7d4c7afaaf8de15717518ba',
  '74f55ecce7cb21ca29e9fc353486cc11',
  '252a09d8dddd0b3accea509919b475c9',
  '422f7b8a86419ef909dee50d305566d0',
  '6f0d6749bf57bbebb0a9a637808971f4',
  '84eb123ac219f84125233087e18aef8b',
  'f574955d5cfecbb32eec94ba0a2f4771',
  '6f190e8413c7f63fc351dc10ef7ef752',
  '547498bc0106921f40c8a8cbe737f63c',
  'da1d3ee1d9a25612ee60bf7e88325b06',
  '3305030aefbcf72820932082ed0e47a5',
  'ad2f7c1ef084415265dc9d371a6c8731',
]

const toItems = (texts: string[]) => texts.map((text) => ({ text }))

const groups = [
  {
    heading: 'Mixers',
    items: toItems([
      'Midas M32 Digital Console',
      'Soundcraft MH2 48 ch. Console',
      'Crest HP 48 Console',
      'Allen & Heath GL3300 Console',
      'Behringer EURO PMX2000',
    ]),
  },
  {
    heading: 'Amplifiers',
    items: toItems(['5x Crown CE 4000 amps', '3x Crown CE 2000 amp', '4x Crown CE 1000 amps']),
  },
  {
    heading: 'Signal Processors / Effects',
    items: toItems([
      '2x TC Electronics M-One',
      '2x TC Electronics D-Two',
      'Lexicon MP 110',
      'Digitech S100',
      'Ibanez Delay',
      '14x DBX 266XL Comp./Gates',
      'Behringer MIC2200 tube pre-amp',
      'Behringer Ultra-BassPro EX1200',
      "DBX EQ's",
      'DBX 2/3/4 way crossover',
      'Behringer DSP 8024 Eq/RTA',
    ]),
  },
  {
    heading: 'Speakers',
    items: toItems([
      '16x EV QRX 115/75 tops',
      '10x 218 EV QRX subs',
      '12x SALA-210 line array speakers',
      '8x JBL M-Pro 415 monitors',
      '4x 15 quad sub boxes',
      '6x Comm. MVP 15 monitors',
      '18" JBL Drum Sub',
    ]),
  },
  {
    heading: 'Microphones',
    items: toItems([
      'Shure SM & Beta58',
      'Shure SM & Beta57',
      'Shure Beta87',
      'Shure Beta 52',
      'Shure Beta91',
      'Shure SM81',
      'Shure ULX SM58 wireless',
      'Audix "D" & "fusion" series',
      'AKG C1000',
      'AKG C3000',
      'AKG D112',
      'Sennheiser MD421',
    ]),
  },
  {
    heading: 'Playback Gear',
    items: toItems(['iPAD / MAC / PC', 'Tascam CD / Cass. player']),
  },
  {
    heading: 'Lighting',
    items: toItems([
      '8x 19x15W RGBW wash movers',
      '4x SHEHDS moving head 230W 7R',
      '8x Stage Matrix RGB 6x6',
      '24x PAR64 LEDs',
      '16x Stagg Headbanger Mini LED Movers',
      '32x PAR 56 can lights',
      '16x PAR 38 can lights',
      "2x Coemar XL's Spot Intell.",
      '4x ProMovers P64 Intell.',
      '4x Chauvet Omega Intell.',
    ]),
  },
  {
    heading: 'Light Consoles / Dimmers',
    items: toItems([
      'Chamsys QuickQ30',
      'Hogg 1000',
      'NSI MLC 16 Light Console',
      'NSI 32 memory Light Console...',
      'Lightronics 32x16 Light Console',
      '5x Lightronics Dimmer Packs',
      'Chauvet DMX-50 Light Controller',
    ]),
  },
  {
    heading: 'Light stands / trusses',
    items: toItems([
      '28 ft. standing motorized front/rear truss system w/ crowd floods',
      '4x 15 ft. crank Light stands',
      '2x 14 ft. "T" Light stands',
      '4x 10 ft. Light Trusses',
      '2x 5 ft. Vertical Trusses',
    ]),
  },
  {
    heading: 'Lighting Misc.',
    items: toItems([
      '8x Strobe Lighting System....',
      '4x 300watt crowd floods',
      '36 ft. black backdrop....',
      '2x Lumiator Followspots..',
    ]),
  },
]

export const equipmentStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'equipment',
  _status: 'published',
  hero: {
    type: 'none',
  },
  meta: {
    description:
      'The professional sound and lighting equipment inventory available from Music Express.',
    title: 'Equipment - Music Express',
  },
  title: 'Equipment',
  layout: [
    {
      blockName: 'Page Header',
      blockType: 'pageHeader',
      title: 'Equipment',
    },
    {
      blockName: 'Equipment',
      blockType: 'equipmentList',
      logos: logoIds.map((id) => ({ url: img(id), alt: 'Equipment brand' })),
      groups,
    },
  ],
}
