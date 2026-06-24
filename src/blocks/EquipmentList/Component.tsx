import React from 'react'

import type { EquipmentListBlock as EquipmentListBlockProps } from '@/payload-types'

import { mediaAlt, mediaUrl } from '../shared/media'

export const EquipmentListBlock: React.FC<EquipmentListBlockProps> = ({ logos, groups }) => {
  const logoList = logos || []
  const groupList = groups || []

  return (
    <div className="mx-auto max-w-[1000px] px-5">
      {logoList.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-5 rounded-t-[4px] bg-[#192438] px-5 py-[30px]">
          {logoList.map((logo, i) => {
            const src = mediaUrl(logo.image)
            if (!src) return null
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.id || i}
                src={src}
                alt={logo.alt || mediaAlt(logo.image, 'Equipment brand')}
                className="h-auto max-h-[60px] w-auto max-w-[140px] object-contain brightness-105 md:max-h-[80px] md:max-w-[180px]"
              />
            )
          })}
        </div>
      )}

      <div className="mb-[10px] rounded-b-[4px] bg-[#192438] px-[30px] pb-10 pt-[10px]">
        <div className="columns-1 gap-x-[40px] md:columns-2">
          {groupList.map((group, i) => (
            <div key={group.id || i} className="mb-7 break-inside-avoid">
              <h3 className="mb-[10px] text-[28px] font-bold uppercase leading-[1.2] text-white">
                {group.heading}
              </h3>
              <ul className="list-none p-0">
                {(group.items || []).map((item, j) => (
                  <li
                    key={item.id || j}
                    className="relative pl-3 text-[18px] leading-[1.6] text-[#d0d0d0]"
                  >
                    <span className="absolute left-0 top-[0.65em] h-1 w-1 rounded-full bg-[#27afcf]" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
