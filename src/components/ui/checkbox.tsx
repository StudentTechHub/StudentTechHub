'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary-600 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=checked]:shadow-[inset_0_0_0_1px_#fff] dark:data-[state=checked]:shadow-[inset_0_0_0_1px_#000]  data-[state=checked]:text-neutral-50',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('relative text-neutral-50')}
    >
      <Check className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
