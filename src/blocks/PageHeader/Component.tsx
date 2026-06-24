import React from 'react'

import type { PageHeaderBlock as PageHeaderBlockProps } from '@/payload-types'

export const PageHeaderBlock: React.FC<PageHeaderBlockProps> = ({ title }) => {
  return (
    <section className="bg-[#192438] px-5 py-[50px] text-center">
      <h1 className="text-[42px] uppercase leading-none text-[#27afcf] md:text-[54px]">{title}</h1>
    </section>
  )
}
