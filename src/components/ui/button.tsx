import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-border dark:focus-visible:ring-neutral-950 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: `hover:bg-primary/90 dark:hover:bg-primary/90 disabled:bg-primary/50 bg-primary text-white-0 active:bg-primary-600 dark:bg-primary dark:text-white-0 dark:active:bg-primary-600`,
        secondary:
          'text-neutral-950 hover:bg-neutral-100 active:bg-neutral-200 disabled:bg-transparent disabled:text-neutral-500 dark:border-neutral-800 dark:text-neutral-950 dark:hover:bg-neutral-100 dark:active:bg-neutral-200',
        outline:
          'border border-neutral-950 text-neutral-950 hover:bg-neutral-100 active:bg-neutral-200 dark:border-neutral-950 dark:text-neutral-950 dark:hover:bg-neutral-100 dark:active:bg-neutral-200',
        link: 'py-0 text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-950',
        danger:
          'bg-danger text-neutral-50 hover:bg-danger/80 active:bg-danger-500 dark:bg-danger dark:text-neutral-50 dark:hover:bg-danger/90',
        success:
          'bg-success text-neutral-50 hover:bg-success/80 active:bg-success-500 dark:bg-success dark:text-neutral-50 dark:hover:bg-success/90',
      },
      size: {
        default: 'h-10 gap-2 rounded-full px-5 py-3 text-base',
        sm: 'h-9 gap-1.5 rounded-full px-4 py-2.5 text-sm',
        lg: 'h-11 gap-2.5 rounded-full px-6 py-3.5 text-lg',
        icon: 'h-10 w-10 rounded-full text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
  iconPosition?: 'leading' | 'trailing'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon: Icon,
      iconPosition = 'leading',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {/* Left Icon */}
          {Icon && iconPosition === 'leading' && Icon}
          {/* Text */}
          <Slottable>{props.children}</Slottable>
          {/* Right Icon */}
          {Icon && iconPosition === 'trailing' && Icon}
        </Comp>
      </>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
