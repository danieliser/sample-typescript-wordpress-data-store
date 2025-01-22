import { store as noticesStore } from '@wordpress/notices';
import { store as coreDataStore } from '@wordpress/core-data';

import { ACTION_TYPES } from './constants';

import type { EditorId } from './reducer';
import type { MyThunkAction } from './types';

const { EDITOR_CHANGE_ID } = ACTION_TYPES;

export const otherAction =
	(): MyThunkAction< void > =>
	( { select } ) => {
		const test = select.getEditorId();

		console.log( test );
	};

/**
 * Change the editor ID.
 *
 * Example showing all 3 types of select & dispatch.
 *
 * @param editorId The editor ID.
 * @returns The thunk action.
 */
export const sampleAction =
	( editorId: EditorId ): MyThunkAction< void > =>
	async ( { select, dispatch, resolveSelect, registry } ) => {
		if ( typeof editorId === 'undefined' ) {
			dispatch( {
				type: EDITOR_CHANGE_ID,
				editorId: undefined,
				editorValues: undefined,
			} );
			return;
		}

		// Action Creator.
		dispatch( {
			type: EDITOR_CHANGE_ID,
			editorId,
		} );

		// Internal Selectors.
		const test1 = select.getEditorId();
		const test2 = select( ( state ) => state.editorId );
		// Internal Resolve Selectors.
		const test3 = await resolveSelect.getEditorId();

		// Internal Dispatch.
		const test4 = dispatch( {
			type: EDITOR_CHANGE_ID,
			editorId,
		} );

		const test6 = dispatch.otherAction();

		// External Selectors.
		const test7 = registry.select( coreDataStore ).getCurrentUser();

		// External Resolve Selectors.
		const test8 = await registry
			.resolveSelect( coreDataStore )
			.getMedia( 1, {
				per_page: -1,
			} );

		// Example External Dispatch.
		const test9 = await registry
			.dispatch( coreDataStore )
			.deleteEntityRecord( 'postType', 'pum_cta', editorId, {
				force: true,
			} );

		// Interacting with additional stores.
		registry
			.dispatch( noticesStore )
			.createNotice( 'success', 'Successfully changed editor', {
				id: 'editor-change-error',
			} );

		console.log( {
			test1,
			test2,
			test3,
			test4,
			test6,
			test7,
			test8,
			test9,
		} );
	};
