'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

interface HeaderClientProps {
  data: Header
}

const fallbackNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Clients', href: '/clients' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact Us', href: '/contact-us' },
]

const hrefFromLink = (link: NonNullable<Header['navItems']>[number]['link']): string => {
  if (link?.type === 'reference' && typeof link.reference?.value === 'object') {
    const value = link.reference.value
    const prefix = link.reference.relationTo === 'posts' ? '/posts' : ''
    return `${prefix}/${value.slug}`
  }
  return link?.url || '#'
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const logoUrl = data?.logoUrl || '/icons/logo.png'
  const taglineUrl = data?.taglineUrl || '/icons/tagline.png'
  const phone = data?.phone || '574-536-7147'
  const facebookUrl = data?.facebookUrl
  const twitterUrl = data?.twitterUrl

  const navItems =
    data?.navItems && data.navItems.length > 0
      ? data.navItems.map((item) => ({
          label: item.link?.label || '',
          href: hrefFromLink(item.link),
        }))
      : fallbackNav

  return (
    <header className="relative z-100">
      <div className="bg-[#192438] pt-[18px]">
        <div className="relative mx-auto grid max-w-[1000px] grid-cols-[120px_1fr] items-center gap-5 px-5 lg:grid-cols-[200px_1fr_auto]">
          <div className="header-logo">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoUrl} alt="Music Express" className="h-auto w-[120px] lg:w-[180px]" />
            </Link>
          </div>

          <div className="order-3 col-span-2 flex justify-center lg:order-0 lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={taglineUrl}
              alt="Music Express — Pro Sound, Lighting, Video"
              className="w-full max-w-[320px] lg:max-w-[485px]"
            />
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="hidden h-[14px] w-[120px] rounded-[2px] bg-[#ffaa56] sm:block lg:h-[20px] lg:w-[174px]" />
            {phone && (
              <a className="text-[16px] font-bold text-[#1d87a0] hover:text-[#efb260]" href={`tel:${phone}`}>
                {phone}
              </a>
            )}
            <div className="hidden gap-2 sm:flex">
              {facebookUrl && (
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/social-facebook.png" alt="Facebook" className="h-[32px] w-[30px]" />
                </a>
              )}
              {twitterUrl && (
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/social-twitter.png" alt="Twitter" className="h-[32px] w-[30px]" />
                </a>
              )}
            </div>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="absolute right-5 top-1/2 flex -translate-y-1/2 flex-col gap-[5px] p-2 lg:hidden"
          >
            <span className="block h-[2px] w-6 bg-[#27afcf]" />
            <span className="block h-[2px] w-6 bg-[#27afcf]" />
            <span className="block h-[2px] w-6 bg-[#27afcf]" />
          </button>
        </div>
      </div>

      <nav className={`bg-[#192438] pb-4 ${open ? 'block' : 'hidden'} lg:block`}>
        <ul className="mx-auto flex max-w-[1000px] list-none flex-col items-center px-5 lg:flex-row lg:flex-wrap lg:justify-center">
          {navItems.map((item, i) => {
            const active = pathname === item.href
            return (
              <li key={i}>
                <Link
                  href={item.href}
                  className={`block px-[25px] py-2 text-[20px] font-bold uppercase leading-[1.2] transition-colors ${
                    active ? 'text-[#efb260]' : 'text-[#27afcf] hover:text-[#efb260]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
