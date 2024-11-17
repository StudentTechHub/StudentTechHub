'use client'

import React, { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true) // Ensure the component only renders after hydration
    }, [])

    if (!isMounted) {
        return null // Prevent rendering mismatched HTML during SSR
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
