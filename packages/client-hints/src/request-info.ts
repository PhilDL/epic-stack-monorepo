import { useRouteLoaderData } from '@remix-run/react'
import {
	type TypedResponse,
	type DataFunctionArgs,
} from '@remix-run/server-runtime'

/**
 * Provide a condition and if that condition is falsey, this throws an error
 * with the given message.
 *
 * inspired by invariant from 'tiny-invariant' except will still include the
 * message in production.
 *
 * @example
 * invariant(typeof value === 'string', `value must be a string`)
 *
 * @param condition The condition to check
 * @param message The message to throw (or a callback to generate the message)
 * @param responseInit Additional response init options if a response is thrown
 *
 * @throws {Error} if condition is falsey
 */
export function invariant(
	condition: any,
	message: string | (() => string),
): asserts condition {
	if (!condition) {
		throw new Error(typeof message === 'function' ? message() : message)
	}
}
/**
 * @returns the request info from the root loader
 */
export function useRequestInfo<TData>(): UseRequestInfo<TData> {
	const data = useRouteLoaderData<TData>('root') as { requestInfo: any }
	invariant(data?.requestInfo, 'No requestInfo found in root loader')

	return data.requestInfo
}

export type UseRequestInfo<TData> = TData extends (
	da: DataFunctionArgs,
) => Promise<TypedResponse<{ requestInfo: infer RInfo }>>
	? RInfo
	: never
