import React from 'react'

import type { ClientsGridBlock as ClientsGridBlockProps } from '@/payload-types'

export const ClientsGridBlock: React.FC<ClientsGridBlockProps> = ({
  heading,
  variant,
  items,
  moreText,
}) => {
  const list = items || []

  return (
    <section className="px-5 pb-[30px] pt-[10px] text-center">
      {heading &&
        (variant === 'heading' ? (
          <h3 className="mb-6 text-[36px] font-normal lowercase leading-[1.1] text-[#000080] md:text-[48px]">
            {heading}
          </h3>
        ) : (
          <p className="mb-[30px] text-[36px] font-normal uppercase leading-[1.1] text-[#000080] md:text-[56px]">
            {heading}
          </p>
        ))}

      <div className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-x-8 gap-y-2">
        {list.map((item, i) => (
          <span
            key={item.id || i}
            className="text-[18px] leading-normal text-[#636363] md:whitespace-nowrap md:text-[22px]"
          >
            {item.name}
          </span>
        ))}
      </div>

      {moreText && <p className="mt-[30px] text-[22px] text-[#636363]">{moreText}</p>}
    </section>
  )
}
