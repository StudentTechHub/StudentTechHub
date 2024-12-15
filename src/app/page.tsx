'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { bgGradientFromName, borderColorFromName, generateTailwindGradientClass } from '@/utils/color'

export default function Home() {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <Avatar className={`border-[${borderColorFromName('Neeraj')}]`}>
                <AvatarImage src='https://github.com/LoveKhatri.png' alt="LoveKhatri" />
                <AvatarFallback className={`${generateTailwindGradientClass(...bgGradientFromName('Love Khatri'))} text-red-500`}>LK</AvatarFallback>
            </Avatar>
            <Avatar className={`${generateTailwindGradientClass(...bgGradientFromName('Love Khatri'))}`}>
                <AvatarFallback>LK</AvatarFallback>
            </Avatar>

            <div className='mt-4'>
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={() =>
                        setTheme(!theme || theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </>
    )
}
