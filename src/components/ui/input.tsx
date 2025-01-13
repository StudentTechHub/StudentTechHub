import * as React from 'react'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'

export interface InputProps {
  label?: string
  placeholder?: string
  className?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  type?: 'text' | 'password' | 'email';
  onTrailingIconClick?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      placeholder,
      leadingIcon,
      trailingIcon,
      onTrailingIconClick,
      type = 'text',
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('flex flex-col')}>
        {label && (
          <Label className="px-5 mb-1 font-Montserrat text-sm text-neutral">
            {label}
          </Label>
        )}
        <div className="relative flex items-center">
          {leadingIcon && (
            <span className="absolute left-0 px-5 text-neutral-500 dark:text-neutral-400">
              {leadingIcon}
            </span>
          )}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={cn(
              `${className} placeholder:text-gray/60 flex h-14 w-full rounded-full border-2 font-Montserrat border-neutral-200 bg-transparent px-6 py-2 pr-14 text-base outline-none hover:border-secondary focus:border-secondary focus:shadow-md transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50`,
              leadingIcon ? 'pl-14' : '',
              trailingIcon ? 'pr-14' : ''
            )}
            {...props}
          />
          {trailingIcon && (
            <span
              className="absolute right-0 px-5 cursor-pointer text-neutral-500 dark:text-neutral-400"
              onClick={onTrailingIconClick}
            >
              {trailingIcon}
            </span>
          )}
        </div>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
