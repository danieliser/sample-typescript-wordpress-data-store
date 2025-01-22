import type { State } from './reducer';
import type { MyCustomType } from './types';

/**
 * The name of the store.
 */
export const STORE_NAME = 'my/custom-store';

/**
 * The action types for the store.
 */
export const ACTION_TYPES = {
	EDITOR_CHANGE_ID: 'EDITOR_CHANGE_ID',
};

/**
 * Initial state for the store.
 */
export const initialState: State = {
	editorId: undefined,
};

/**
 * Default values for a new custom type.
 */
export const defaultValues: MyCustomType< 'edit' > = {
	id: 0,
	uuid: '',
	slug: '',
	title: { rendered: '', raw: '' },
	content: { rendered: '', raw: '', is_protected: false, block_version: '1' },
	excerpt: { rendered: '', raw: '', protected: false },
	status: 'draft',
	settings: {
		type: 'link',
	},
	// Required Post fields
	date: null,
	date_gmt: null,
	guid: { rendered: '', raw: '' },
	link: '',
	modified: '',
	modified_gmt: '',
	type: 'pum_cta',
	author: 0,
	generated_slug: '',
	permalink_template: '',
};
