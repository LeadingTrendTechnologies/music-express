import React from 'react'

import type { TextSectionBlock as TextSectionBlockProps } from '@/payload-types'

export const TextSectionBlock: React.FC<TextSectionBlockProps> = ({
  content,
  color,
  fontSize,
  textAlign,
  bold,
}) => {
  return (
    <div className="mx-auto max-w-[1000px] px-5">
      <p
        className="whitespace-pre-wrap leading-[1.6]"
        style={{
          color: color || '#636363',
          fontSize: fontSize || '18px',
          textAlign: (textAlign || 'left') as React.CSSProperties['textAlign'],
          fontWeight: bold ? 700 : 400,
        }}
      >
        {content}
      </p>
    </div>
  )
}
