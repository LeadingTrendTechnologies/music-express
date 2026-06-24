'use client'

import React, { useCallback, useEffect, useState } from 'react'

export const HeroGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const count = images.length
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return
      setFading(true)
      setTimeout(() => {
        setActive((index + count) % count)
        setFading(false)
      }, 200)
    },
    [count],
  )

  useEffect(() => {
    if (count <= 1) return
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActive((current) => (current + 1) % count)
        setFading(false)
      }, 200)
    }, 5000)
    return () => clearInterval(interval)
  }, [count])

  if (count === 0) return null

  return (
    <div className="group relative w-full max-w-[521px]">
      <div className="aspect-521/383 w-full overflow-hidden rounded-[4px] bg-black/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[active]}
          alt=""
          className={`h-full w-full object-cover transition-opacity duration-400 ${
            fading ? 'opacity-30' : 'opacity-100'
          }`}
        />
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => goTo(active - 1)}
            className="absolute left-0 top-1/2 flex h-[42px] w-[22px] -translate-y-1/2 items-center justify-center rounded-r-[4px] bg-black/40 text-[28px] leading-[42px] text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            &#8249;
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => goTo(active + 1)}
            className="absolute right-0 top-1/2 flex h-[42px] w-[22px] -translate-y-1/2 items-center justify-center rounded-l-[4px] bg-black/40 text-[28px] leading-[42px] text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            &#8250;
          </button>
        </>
      )}

      {count > 1 && (
        <ul className="flex list-none justify-center gap-2 pt-[10px]">
          {images.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-[10px] w-[10px] rounded-full shadow-[inset_0_2px_2px_#32323280] transition-colors ${
                  i === active ? 'bg-[#98c22a]' : 'bg-[#969696]'
                }`}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
