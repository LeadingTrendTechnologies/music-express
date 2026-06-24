import Link from 'next/link'
import React from 'react'

import { getCachedGlobal } from '@/utilities/getGlobals'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const logoUrl = footerData?.logoUrl || '/icons/footer-logo.png'
  const phone = footerData?.phone || '574-536-7147'
  const facebookUrl = footerData?.facebookUrl
  const companyName = footerData?.companyName || 'Music Express'
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-[#333]">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-4 px-5 pb-[30px] pt-10 text-center">
        {facebookUrl && (
          <a
            className="text-[22px] text-[#b8b8b8] transition-colors hover:text-[#27afcf]"
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/social-facebook.png" alt="Facebook" className="h-[24px] w-auto" />
          </a>
        )}

        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoUrl} alt={companyName} className="w-full max-w-[297px]" />
        </Link>

        {phone && (
          <a
            className="text-[16px] uppercase text-[#888] transition-colors hover:text-[#27afcf]"
            href={`tel:${phone}`}
          >
            {phone}
          </a>
        )}

        <p className="font-['Lato',sans-serif] text-[10px] text-[#c7c7c7]">
          © {year} {companyName}. All rights reserved.
        </p>

        <Link
          href="/admin"
          className="mt-2 text-[11px] text-[#666] opacity-60 transition-opacity hover:text-[#27afcf] hover:opacity-100"
        >
          Admin
        </Link>
      </div>
    </footer>
  )
}
