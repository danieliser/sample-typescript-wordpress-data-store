import { ACTION_TYPES, initialState } from './constants';

const { EDITOR_CHANGE_ID } = ACTION_TYPES;

export type ActionPayloadTypes = {
	type: typeof EDITOR_CHANGE_ID;
	editorId?: State[ 'editorId' ] | undefined;
};

export type EditorId = 'new' | number | undefined;

/**
 * The shape of the state for the call to actions store.
 */
export type State = {
	editorId?: EditorId;
};

const reducer = (
	state: State = initialState,
	{ type, editorId }: ActionPayloadTypes
) => {
	switch ( type ) {
		case EDITOR_CHANGE_ID:
			return {
				...state,
				editorId,
			};

		default:
			return state;
	}
};

export default reducer;
