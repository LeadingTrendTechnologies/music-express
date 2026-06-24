import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from '@payload-config'

import { nebulaUrl } from '../src/endpoints/seed/assets'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const URL_MAP_PATH = path.resolve(dirname, '../src/endpoints/seed/asset-map.json')
const ID_MAP_PATH = path.resolve(dirname, '../src/endpoints/seed/media-map.json')

const equipmentIds = [
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

const assets: { id: string; name: string }[] = [
  { id: '5b53b03de359245f9a8dc5acf9845455', name: 'home-hero-bg' },
  { id: '66ee98dd12f0f06f4fd2b3b6208dd9a5', name: 'home-gallery-1' },
  { id: '7f5ab9bdd164a4b08fb06f28cd956cb5', name: 'home-gallery-2' },
  { id: '4d1976a30fe3ca903d7dbc5a36e94b93', name: 'home-gallery-3' },
  { id: 'ddfa1bbc8e588ab2e750bee7b60cb217', name: 'home-gallery-4' },
  { id: '13841a6b68748cc54dc21b21916bbd8f', name: 'home-gallery-5' },
  { id: '22af1e583edc9b486847f3d5186fc914', name: 'home-gallery-6' },
  { id: '04406270cfa3c87ea0d9fd740e037a62', name: 'home-gallery-7' },
  { id: '0718926b80b5d4c4fdc2a7e34172f426', name: 'home-gallery-8' },
  { id: 'c662cff33581272f4b62e5b3a397f485', name: 'home-gallery-9' },
  { id: '2fa620451fa2b278d5d9df928277252f', name: 'home-feature-1' },
  { id: 'cf29acacf729c64ee66fc8f959fab6e6', name: 'home-feature-2' },
  { id: '0b017a48ba4cfe46b8d503b4d121925e', name: 'about-owner' },
  ...equipmentIds.map((id, i) => ({ id, name: `equipment-logo-${i + 1}` })),
]

const extFromType = (type?: string | null): string => {
  if (!type) return 'jpg'
  if (type.includes('png')) return 'png'
  if (type.includes('webp')) return 'webp'
  if (type.includes('gif')) return 'gif'
  if (type.includes('svg')) return 'svg'
  return 'jpg'
}

const run = async () => {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.warn(
      '\n⚠️  BLOB_READ_WRITE_TOKEN is not set — uploads will go to local public/media, NOT Vercel Blob.\n' +
        '   Set a valid "vercel_blob_rw_..." token in .env to store assets in Blob.\n',
    )
  }

  const payload = await getPayload({ config })
  const map: Record<string, string> = {}
  const idMap: Record<string, string> = {}

  for (const { id, name } of assets) {
    // Idempotent: remove any prior import of this asset so the URL is
    // regenerated with the current storage config.
    const existing = await payload.find({
      collection: 'media',
      where: { alt: { equals: name } },
      limit: 100,
      pagination: false,
    })

    for (const doc of existing.docs) {
      await payload.delete({ collection: 'media', id: doc.id })
    }

    const res = await fetch(nebulaUrl(id))
    if (!res.ok) {
      payload.logger.error(`Failed to download ${name} (${id}): HTTP ${res.status}`)
      continue
    }

    const buffer = Buffer.from(await res.arrayBuffer())
    const mimetype = res.headers.get('content-type') || 'image/jpeg'
    const ext = extFromType(mimetype)

    const doc = await payload.create({
      collection: 'media',
      data: { alt: name },
      file: {
        data: buffer,
        name: `${name}.${ext}`,
        mimetype,
        size: buffer.byteLength,
      },
    })

    map[id] = doc.url as string
    idMap[id] = String(doc.id)
    payload.logger.info(`Uploaded ${name} -> ${doc.url}`)
  }

  fs.writeFileSync(URL_MAP_PATH, `${JSON.stringify(map, null, 2)}\n`)
  fs.writeFileSync(ID_MAP_PATH, `${JSON.stringify(idMap, null, 2)}\n`)
  payload.logger.info(`Wrote ${Object.keys(map).length} entries to asset-map.json and media-map.json`)
  payload.logger.info('Next: run `npx tsx scripts/seed-pages.ts` to push the changes into the database.')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
