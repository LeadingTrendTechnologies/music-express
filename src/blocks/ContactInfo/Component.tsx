import React from 'react'

import type { ContactInfoBlock as ContactInfoBlockProps } from '@/payload-types'

export const ContactInfoBlock: React.FC<ContactInfoBlockProps> = ({ phone, email }) => {
  return (
    <div className="mx-auto max-w-[1000px] px-5">
      <div className="my-4 text-center text-[18px] leading-[1.8]">
        {phone && (
          <p>
            <strong>Phone:</strong>{' '}
            <a
              className="font-semibold text-[#27afcf] hover:text-[#efb260]"
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
            >
              {phone}
            </a>
          </p>
        )}
        {email && (
          <p>
            <strong>E-mail:</strong>{' '}
            <a className="font-semibold text-[#27afcf] hover:text-[#efb260]" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
