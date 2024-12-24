import React from 'react'
import { clsx } from 'clsx'

interface SeparatorProps {
  text?: string
  className?: string
}

export const Separator: React.FC<SeparatorProps> = ({ text, className }) => {
  return (
    <div className={clsx('relative w-full', className)}>
      <div className="flex items-center">
        <div
          className={clsx(
            'h-px flex-grow',
            'bg-gradient-to-r from-[#1A13130D] via-[#423C3D] to-[#1A13130D]'
          )}
        />
      </div>

      {text && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform px-4 dark:invert bg-neutral-100 text-center text-black dark:text-white">
          {text}
        </span>
      )}
    </div>
  )
}

export default Separator
