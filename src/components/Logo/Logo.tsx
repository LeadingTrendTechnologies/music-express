import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span
      className={clsx(
        'flex items-baseline gap-1.5 text-2xl font-black uppercase leading-none tracking-tight',
        className,
      )}
    >
      <span className="text-foreground">Music</span>
      <span className="text-brand">Express</span>
    </span>
  )
}
