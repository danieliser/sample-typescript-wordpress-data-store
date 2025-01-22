import type { AnyConfig, ReduxStoreConfig } from '@wordpress/data/src/types';

/**
 * Helper type to wrap return type of a function in Promise
 */
export type PromiseReturnType< T > = T extends ( ...args: any[] ) => any
	? ( ...args: Parameters< T > ) => Promise< ReturnType< T > >
	: never;

/**
 * Helper type to wrap all methods' return types in Promise
 */
export type PromiseReturnMethods< T > = {
	[ K in keyof T ]: T[ K ] extends ( ...args: any[] ) => any
		? PromiseReturnType< T[ K ] >
		: T[ K ];
};

/**
 * Get the state type from a redux store config.
 */
export type StateOf< Config extends AnyConfig > =
	Config extends ReduxStoreConfig< infer State, any, any > ? State : never;
