import type { Field } from 'payload'

// Shared spacing scale used by every editable content block.
const SPACING_VALUES = ['none', 'sm', 'md', 'lg', 'xl'] as const

export type SpacingValue = (typeof SPACING_VALUES)[number]

export const spacingOptions: { label: string; value: SpacingValue }[] = [
  { label: 'None', value: 'none' },
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'Extra Large', value: 'xl' },
]

const SPACING_PX: Record<SpacingValue, string> = {
  none: '0px',
  sm: '12px',
  md: '24px',
  lg: '48px',
  xl: '72px',
}

const isSpacingValue = (value: unknown): value is SpacingValue =>
  typeof value === 'string' && value in SPACING_PX

export const spacingToPx = (value?: string | null, fallback?: SpacingValue): string => {
  if (isSpacingValue(value)) return SPACING_PX[value]
  if (fallback && isSpacingValue(fallback)) return SPACING_PX[fallback]
  return '0px'
}

export type SpacingDefaults = Partial<Record<'top' | 'bottom' | 'left' | 'right', SpacingValue>>

// Per-block default spacing. Empty means flush (used for full-bleed bands).
export const blockSpacing: Record<string, SpacingDefaults> = {
  // Full-bleed background sections – flush by default.
  serviceHero: {},
  featureCards: {},
  serviceArea: {},
  pageHeader: {},
  clientsGrid: {},
  equipmentList: {},
  // Inline content sections – vertical breathing room by default.
  contactInfo: { top: 'md', bottom: 'md' },
  textSection: { top: 'md', bottom: 'md' },
  headingSection: { top: 'md', bottom: 'md' },
  ownerQuote: { top: 'lg', bottom: 'lg' },
  formBlock: { top: 'md', bottom: 'md' },
  content: { top: 'xl', bottom: 'xl' },
  cta: { top: 'xl', bottom: 'xl' },
  mediaBlock: { top: 'xl', bottom: 'xl' },
  archive: { top: 'xl', bottom: 'xl' },
}

// Builds the collapsible "Spacing" field group added to every block.
// Field names stay top-level on the block (collapsible is presentational only).
export const createSpacingFields = (defaults: SpacingDefaults = {}): Field => ({
  type: 'collapsible',
  label: 'Spacing',
  admin: { initCollapsed: true },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'spacingTop',
          type: 'select',
          label: 'Space Above',
          defaultValue: defaults.top ?? 'none',
          admin: { width: '50%' },
          options: spacingOptions,
        },
        {
          name: 'spacingBottom',
          type: 'select',
          label: 'Space Below',
          defaultValue: defaults.bottom ?? 'none',
          admin: { width: '50%' },
          options: spacingOptions,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'spacingLeft',
          type: 'select',
          label: 'Space Left',
          defaultValue: defaults.left ?? 'none',
          admin: { width: '50%' },
          options: spacingOptions,
        },
        {
          name: 'spacingRight',
          type: 'select',
          label: 'Space Right',
          defaultValue: defaults.right ?? 'none',
          admin: { width: '50%' },
          options: spacingOptions,
        },
      ],
    },
  ],
})

type SpacingProps = {
  spacingTop?: string | null
  spacingBottom?: string | null
  spacingLeft?: string | null
  spacingRight?: string | null
}

// Resolves block spacing fields into inline margin styles, falling back to the
// per-block defaults so existing/un-seeded documents still render sensibly.
export const spacingStyle = (
  block: SpacingProps,
  defaults: SpacingDefaults = {},
): {
  marginTop: string
  marginBottom: string
  marginLeft: string
  marginRight: string
} => ({
  marginTop: spacingToPx(block.spacingTop, defaults.top),
  marginBottom: spacingToPx(block.spacingBottom, defaults.bottom),
  marginLeft: spacingToPx(block.spacingLeft, defaults.left),
  marginRight: spacingToPx(block.spacingRight, defaults.right),
})
