import { epicStackPreset } from '@epic-stack-monorepo/ui/tailwind'
import { type Config } from 'tailwindcss'

export default {
	content: [
		'./app/**/*.{ts,tsx,jsx,js}',
		'src/**/*.{ts,tsx}',
		'../../packages/**/*.{ts,tsx}',
	],
	presets: [epicStackPreset],
} satisfies Config
