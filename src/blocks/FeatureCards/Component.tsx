import React from 'react'

import type { FeatureCardsBlock as FeatureCardsBlockProps } from '@/payload-types'

import { mediaAlt, mediaUrl } from '../shared/media'

export const FeatureCardsBlock: React.FC<FeatureCardsBlockProps> = ({ cards }) => {
  const items = cards || []
  if (items.length === 0) return null

  return (
    <section className="bg-[#192438] px-5 pb-10 pt-0">
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((card, i) => {
          const externalProps = card.buttonExternal
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {}
          const cardImageUrl = mediaUrl(card.image)

          return (
            <div
              key={card.id || i}
              className="flex h-full flex-col overflow-hidden rounded-[5px] bg-[#eaeaea]"
            >
              <div className="shrink-0">
                {card.mediaType === 'youtube' && card.youtubeId ? (
                  <div className="relative w-full bg-black pb-[56.25%]">
                    <iframe
                      className="absolute inset-0 h-full w-full border-0"
                      src={`https://www.youtube.com/embed/${card.youtubeId}`}
                      title={card.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : cardImageUrl ? (
                  <div className="flex min-h-[100px] items-center justify-center bg-[#ddd] p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cardImageUrl}
                      alt={card.imageAlt || mediaAlt(card.image, card.title)}
                      className="max-h-[90px] w-auto object-contain"
                    />
                  </div>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h6 className="mb-2 text-[18px] uppercase leading-normal text-[#27afcf]">
                  {card.title}
                </h6>
                {card.description && (
                  <p className="mb-3 flex-1 text-[14px] leading-[1.4] text-[#636363]">
                    {card.description}
                  </p>
                )}
                <div className="flex flex-col items-start gap-2">
                  {card.buttonLabel && card.buttonHref && (
                    <a className="me-btn me-btn-orange me-btn-sm" href={card.buttonHref} {...externalProps}>
                      {card.buttonLabel}
                    </a>
                  )}
                  {card.extraButtonLabel && card.extraButtonHref && (
                    <a className="me-btn me-btn-gray me-btn-sm" href={card.extraButtonHref}>
                      {card.extraButtonLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
