import assetMap from './asset-map.json'
import mediaMap from './media-map.json'

// Original GoDaddy/Nebula CDN params used by the live Music Express site.
const NEBULA = '?AccessKeyId=042735BF8B97AAF39122&disposition=0&alloworigin=1'

export const nebulaUrl = (id: string): string => `https://nebula.wsimg.com/${id}${NEBULA}`

// Maps a Nebula asset id -> our self-hosted (Vercel Blob) URL, populated by
// `scripts/import-assets.ts`. Falls back to the original CDN URL until the
// import has been run.
const urlMap = assetMap as Record<string, string>

export const img = (id: string): string => urlMap[id] ?? nebulaUrl(id)

// Maps a Nebula asset id -> the Media collection document id, populated by
// `scripts/import-assets.ts`. Used to wire blocks to uploaded Media docs.
const idMap = mediaMap as Record<string, string>

export const mediaId = (id: string): string | undefined => idMap[id]
