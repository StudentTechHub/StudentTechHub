import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					'50': '#EFFAFF',
					'100': '#DEF3FF',
					'200': '#B6EAFF',
					'300': '#75DBFF',
					'400': '#2CCAFF',
					'500': '#0ABCFF',
					'600': '#0090D4',
					'700': '#0072AB',
					'800': '#00608D',
					'900': '#065074',
					'950': '#04334D',
					DEFAULT: '#0ABCFF',
				},
				secondary: {
					DEFAULT: '#4A5568',
					'50': '#F6F7F9',
					'100': '#ECEEF2',
					'200': '#D6DAE1',
					'300': '#B1BAC8',
					'400': '#8795A9',
					'500': '#68788F',
					'600': '#536076',
					'700': '#4A5568',
					'800': '#3B4351',
					'900': '#343A46',
					'950': '#23272E',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [tailwindcssAnimate,],
} satisfies Config;
