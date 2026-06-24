import React from 'react'

import type { OwnerQuoteBlock as OwnerQuoteBlockProps } from '@/payload-types'

import { mediaUrl } from '../shared/media'

export const OwnerQuoteBlock: React.FC<OwnerQuoteBlockProps> = ({
  photo,
  quote,
  name,
  role,
}) => {
  const photoSrc = mediaUrl(photo)

  return (
    <div className="mx-auto max-w-[1000px] px-5">
      <div className="my-[10px] flex flex-wrap items-center justify-center gap-10 rounded-[4px] bg-[#b7b7b7] px-[30px] py-10">
        {photoSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoSrc}
            alt={name || ''}
            className="h-[220px] w-[220px] shrink-0 rounded-full object-cover md:h-[300px] md:w-[300px]"
          />
        )}
        <div className="max-w-[450px] text-left">
          <p className="mb-5 text-[22px] leading-[1.4] text-white md:text-[28px]">{quote}</p>
          {name && (
            <h4 className="m-0 text-[18px] font-normal uppercase text-white">{name}</h4>
          )}
          {role && <p className="mt-2 text-[19px] text-[#737373]">{role}</p>}
        </div>
      </div>
    </div>
  )
}
