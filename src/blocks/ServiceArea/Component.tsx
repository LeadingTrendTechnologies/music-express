import React from 'react'

import type { ServiceAreaBlock as ServiceAreaBlockProps } from '@/payload-types'

export const ServiceAreaBlock: React.FC<ServiceAreaBlockProps> = ({
  cities,
  tagline,
  states,
  ctaLabel,
  ctaHref,
}) => {
  return (
    <>
      <section className="mx-auto max-w-[1000px] px-5 py-[30px] text-center">
        {cities && (
          <p className="text-[18px] leading-[1.6] text-[#636363]">{cities}</p>
        )}
      </section>

      <section className="mx-auto max-w-[1000px] px-5 pb-[50px] pt-5 text-center">
        {tagline && (
          <h3 className="mb-2 text-[28px] uppercase leading-[1.3] text-[#27afcf] md:text-[36px]">
            {tagline}
          </h3>
        )}
        {states && (
          <h2 className="mb-6 text-[42px] uppercase leading-none text-[#27afcf] md:text-[54px]">
            {states}
          </h2>
        )}
        {ctaLabel && ctaHref && (
          <a className="me-btn me-btn-orange" href={ctaHref}>
            {ctaLabel}
          </a>
        )}
      </section>
    </>
  )
}
