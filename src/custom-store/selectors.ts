import { applyFilters } from '@wordpress/hooks';
import { store as coreDataStore, Post } from '@wordpress/core-data';
import { createRegistrySelector, createSelector } from '@wordpress/data';

import { defaultValues } from './constants';

import type { MyCustomType, MyStoreState as State } from './types';

/**
 * Check if the editor is active.
 */
export const getEditorId = createSelector(
	( state: State ) => state?.editorId,
	( state: State ) => [ state.editorId ]
);

/**
 * Check if the editor is active.
 */
export const isEditorActive = createSelector(
	( state: State ): boolean => {
		const editorId = state?.editorId;

		if ( typeof editorId === 'string' && editorId === 'new' ) {
			return true;
		}

		return typeof editorId === 'number' && editorId > 0;
	},
	( state: State ) => [ state.editorId ]
);

export const getDataFromCoreSelector = createRegistrySelector( ( select ) =>
	createSelector(
		async ( state: State ) => {
			const user = select( coreDataStore ).getCurrentUser();

			const editorValues = select( coreDataStore ).getEditedEntityRecord(
				'postType',
				'post',
				state.editorId ?? 0
			) as MyCustomType< 'edit' > | false;

			const post = select( coreDataStore ).getEntityRecord<
				Post< 'edit' >
			>( 'postType', 'post', state.editorId ?? 0 );

			const currentUserCanEdit = select( coreDataStore ).canUser(
				'edit',
				{
					kind: 'postType',
					name: 'post',
					id: post?.id ?? undefined,
				}
			);

			return { user, editorValues, post, currentUserCanEdit };
		},
		( state: State ) => [ state.editorId ]
	)
);

/**
 * Get default entity values.
 */
export const getEntityDefaults = ( _state: State ) => {
	return applyFilters(
		'my.customType.defaultValues',
		defaultValues
	) as MyCustomType< 'edit' >;
};
