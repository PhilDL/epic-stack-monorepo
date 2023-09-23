import { describe, it, expect } from 'vitest'
import { getCookieValue } from './client-hints.tsx'

describe('getCookieValue', () => {
	it('should return the cookie value when it exists', () => {
		const cookieString =
			'CH-time-zone=Europe/Paris; CH-prefers-color-scheme=dark'
		const value = getCookieValue(cookieString, 'theme')
		expect(value).toBe('dark')
	})

	it('should return null when the cookie does not exist', () => {
		const cookieString =
			'CH-time-zone=Europe/Paris; CH-prefers-color-scheme=dark'
		const value = getCookieValue(cookieString, 'timeZone')
		expect(value).toBe('Europe/Paris')
	})

	it('should throw an error when the client hint is unknown', () => {
		const cookieString =
			'device-memory=8; viewport-width=1920; viewport-height=1080'
		// @ts-expect-error cookie name are a union
		expect(() => getCookieValue(cookieString, 'unknownHint')).toThrowError(
			'Unknown client hint: unknownHint',
		)
	})
})
