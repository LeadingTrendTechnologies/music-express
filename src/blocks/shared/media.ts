import type { Media } from '@/payload-types'

export type MediaField = number | string | Media | null | undefined

// Safely extracts a URL from an upload (Media) field value, whether it's a
// populated Media doc (depth >= 1) or just an id (returns undefined).
export const mediaUrl = (value: MediaField): string | undefined =>
  value && typeof value === 'object' ? (value.url ?? undefined) : undefined

// Extracts the alt text from a populated Media doc, falling back to a default.
export const mediaAlt = (value: MediaField, fallback = ''): string =>
  value && typeof value === 'object' ? (value.alt ?? fallback) : fallback
