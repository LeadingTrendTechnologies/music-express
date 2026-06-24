import React from 'react'

import type { HeadingSectionBlock as HeadingSectionBlockProps } from '@/payload-types'

export const HeadingSectionBlock: React.FC<HeadingSectionBlockProps> = ({
  text,
  level,
  color,
  fontSize,
  textAlign,
}) => {
  const Tag = level === '3' ? 'h3' : 'h2'

  return (
    <div className="mx-auto max-w-[1000px] px-5">
      <Tag
        className="uppercase font-normal leading-[1.2]"
        style={{
          color: color || '#192438',
          fontSize: fontSize || '36px',
          textAlign: (textAlign || 'center') as React.CSSProperties['textAlign'],
        }}
      >
        {text}
      </Tag>
    </div>
  )
}
