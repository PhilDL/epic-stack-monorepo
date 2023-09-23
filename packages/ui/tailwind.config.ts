import type { Config } from 'tailwindcss'

import { epicStackPreset } from './src/tailwind/epic-stack-preset.ts'

export default {
	content: ['./src/**/*.{ts,tsx}'],
	presets: [epicStackPreset],
} satisfies Config
