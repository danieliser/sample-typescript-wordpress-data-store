import { createReduxStore } from '@wordpress/data';

import { STORE_NAME, defaultValues } from './constants';
import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

import type { MyStoreState, MyStoreActions, MyStoreSelectors } from './types';

/**
 * Generate store config.
 */
export const storeConfig = () => ( {
	reducer,
	actions,
	selectors,
} );

/**
 * Store definition for the code data namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 */
const store = createReduxStore<
	MyStoreState,
	MyStoreActions,
	MyStoreSelectors
>( STORE_NAME, storeConfig() );

export default store;

export {
	store as callToActionStore,
	defaultValues as defaultCtaValues,
	STORE_NAME as CALL_TO_ACTIONS_STORE,
};
