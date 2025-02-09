import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			keyframes: {
				'logo-pulse': {
					'0%': { opacity: '0' },
					'49%': { opacity: '0' },
					'50%': { opacity: '100' },
				},
			},
			animation: {
				'logo-pulse': 'logo-pulse 1s infinite',
			},
		},
	},
	plugins: [],
} satisfies Config
