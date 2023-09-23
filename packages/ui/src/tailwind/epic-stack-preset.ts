import  { type Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'

import { shadcnPlugin } from './shadcn-plugin.ts'

export const epicStackPreset = {
	darkMode: ['class'],
	content: [],
	plugins: [animatePlugin, radixPlugin, shadcnPlugin],
} satisfies Config
