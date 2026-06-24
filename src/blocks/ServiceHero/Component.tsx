import React from 'react'

import type { ServiceHeroBlock as ServiceHeroBlockProps } from '@/payload-types'

import { mediaUrl } from '../shared/media'
import { HeroGallery } from './HeroGallery'

export const ServiceHeroBlock: React.FC<ServiceHeroBlockProps> = ({
  ctaLine1,
  ctaLine2,
  headlines,
  backgroundImage,
  galleryImages,
}) => {
  const images = (galleryImages || [])
    .map((g) => mediaUrl(g.image))
    .filter(Boolean) as string[]
  const bgUrl = mediaUrl(backgroundImage)

  return (
    <section className="relative min-h-[580px] overflow-hidden bg-[#192438]">
      {bgUrl && (
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgUrl}
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
        </div>
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, #192438d9 0%, #19243899 50%, #19243866 100%)',
        }}
      />

      <div className="relative z-1 mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-10 px-5 pb-[60px] pt-10 md:grid-cols-2">
        <div className="order-2 text-center md:order-1 md:text-right">
          {ctaLine1 && (
            <h3 className="mb-1 text-[28px] uppercase leading-[1.3] text-[#27afcf] md:text-[36px]">
              {ctaLine1}
            </h3>
          )}
          {ctaLine2 && (
            <h3 className="mb-2 text-[28px] uppercase leading-[1.3] text-[#27afcf] md:text-[36px]">
              {ctaLine2}
            </h3>
          )}
          {(headlines || []).map((headline, i) => (
            <h1
              key={headline.id || i}
              className="text-[42px] uppercase leading-none text-white md:text-[60px]"
            >
              {headline.label}
            </h1>
          ))}
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <HeroGallery images={images} />
        </div>
      </div>
    </section>
  )
}
