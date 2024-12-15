import { colors } from './src/theme/color'
import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

export default {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            screens: {
                '2xl': '1536px',
                '3xl': '1920px',
            },
        },
        extend: {
            colors,
            boxShadow: {
                'navbar': '0px 4px 12px 0px rgba(26, 19, 19, 0.25)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            backdropBlur: {
                super: '100px',
                gigant: '180px',
            },
            fontSize: {
                xxs: ['10px', {}],
            },
            maxWidth: {
                '8xl': '85rem',
                '9xl': '100rem',
                '10xl': '110rem',
            },
            minHeight: {
                28: '28rem',
                38: '38rem',
            },
            transitionDuration: {
                0: '0ms',
                2000: '2000ms',
                5000: '5000ms',
            },
            margin: {
                110: '30rem',
                120: '40rem',
                130: '50rem',
                140: '60rem',
                '-110': '-30rem',
                '-120': '-40rem',
            },
            inset: {
                34: '8.5rem',
                22: '5.5rem',
            },
        },
        zIndex: {
            0: '0',
            10: '10',
            20: '20',
            25: '25',
            30: '30',
            40: '40',
            45: '45',
            50: '50',
            75: '75',
            100: '100',
            auto: 'auto',
        },
    },
    plugins: [tailwindcssAnimate, typography],
} satisfies Config
