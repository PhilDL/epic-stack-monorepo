import { defineConfig, type Options } from 'tsup'

export default defineConfig(opts => {
	return {
		clean: !opts.watch,
		dts: true,
		format: ['esm'],
		minify: true,
		outDir: 'dist',
		entry: ['./src/index.ts', './src/client-hints.ts', './src/request-info.ts'],
	} satisfies Options
})
