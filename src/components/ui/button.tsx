import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-border dark:focus-visible:ring-neutral-dark-950",
  {
    variants: {
      variant: {
        primary: `bg-primary text-white-0 hover:bg-primary/90 dark:bg-primary dark:text-white-0 dark:hover:bg-primary/90 active:bg-primary-600 dark:active:bg-primary-600 disabled:bg-primary/50`,
        secondary: "text-neutral-950 dark:text-neutral-dark-950 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-dark-100 dark:hover:bg-neutral-dark-100 active:bg-neutral-200 dark:active:bg-neutral-dark-200 disabled:bg-transparent disabled:text-neutral-500",
        outline: "border border-neutral-950 dark:border-neutral-dark-950 text-neutral-950 dark:text-neutral-dark-950 hover:bg-neutral-100 dark:hover:bg-neutral-dark-100 active:bg-neutral-200 dark:active:bg-neutral-dark-200",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        danger: "bg-danger text-neutral-50 hover:bg-danger/80 dark:bg-danger dark:text-neutral-50 dark:hover:bg-danger/90 active:bg-danger-500",
        success: "bg-success text-neutral-50 hover:bg-success/80 dark:bg-success dark:text-neutral-50 dark:hover:bg-success/90 active:bg-success-500",
      },
      size: {
        default: "h-10 px-4 py-2.5 rounded-full text-base",
        sm: "h-9 rounded-full px-3 text-sm",
        lg: "h-11 rounded-full px-8 text-lg",
        icon: "h-10 w-10 rounded-full text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
  iconPosition?: "leading" | "trailing"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, iconPosition = "leading", ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "leading" && <span className="icon">{icon}</span>}
        {props.children}
        {icon && iconPosition === "trailing" && <span className="icon">{icon}</span>}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }