import type {
	ReduxStoreConfig,
	StoreDescriptor,
} from '@wordpress/data/src/types';

import type * as actions from '../actions';
import type * as selectors from '../selectors';
import type reducer from '../reducer';

import type {
	StoreDispatch,
	StoreSelect,
	StoreThunkContext,
} from '../../types';

/**
 * 1) The shape of your store's "State" is typically what your reducer returns.
 */
export type MyStoreState = ReturnType< typeof reducer >;

/**
 * 2) Actions object is `typeof actions` (your `./actions.ts`).
 */
export type MyStoreActions = typeof actions;

/**
 * 3) Selectors object is `typeof selectors` (your `./selectors.ts`).
 */
export type MyStoreSelectors = typeof selectors;

/**
 * 4) Build a ReduxStoreConfig that references your state, actions, and selectors.
 */
export interface MyStoreConfig
	extends ReduxStoreConfig< MyStoreState, MyStoreActions, MyStoreSelectors > {
	// Optionally add `resolvers`, `controls`, etc. if you have them.
}

/**
 * 5) Now define a "Store Descriptor" that references this config.
 *    The `StoreDescriptor` type also wants the store name, e.g. 'my/custom-store'.
 */
export interface MyStoreDescriptor extends StoreDescriptor< MyStoreConfig > {
	name: 'my/custom-store'; // or whatever your store name is
}

/**
 * 6) Selectors generated from the store descriptor.
 * - The object form is your store’s curried selectors.
 * - The function form returns typed selectors for another store descriptor.
 * - The optional string form is for string-based usage.
 */
export type MyStoreSelect = StoreSelect< MyStoreDescriptor >;

/**
 * 7) Dispatch generated from the store descriptor.
 * - The object form is your store’s actions.
 * - The function form returns typed actions for another store descriptor.
 */
export type MyStoreDispatch = StoreDispatch< MyStoreDescriptor >;

/**
 * 8) Finally, define the ThunkArgs / ThunkAction shape.
 */
export type MyThunkContext = StoreThunkContext< MyStoreDescriptor >;

/**
 * 9) Finally, define the ThunkAction shape.
 */
export type MyThunkAction< R = void > = (
	context: MyThunkContext
) => Promise< R > | R;
