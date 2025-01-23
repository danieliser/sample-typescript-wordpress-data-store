import { ACTION_TYPES, initialState } from './constants';

const { EDITOR_CHANGE_ID } = ACTION_TYPES;

export type EditorId = 'new' | number | undefined;

type BaseAction = {
	type: keyof typeof ACTION_TYPES;
};

type ChangeEditorIdAction = BaseAction & {
	type: typeof EDITOR_CHANGE_ID;
	editorId: EditorId;
};

export type ReducerAction = ChangeEditorIdAction;

/**
 * The shape of the state for the call to actions store.
 */
export type State = {
	editorId?: EditorId;
};

const reducer = ( state: State = initialState, action: ReducerAction ) => {
	switch ( action.type ) {
		case EDITOR_CHANGE_ID:
			return {
				...state,
				editorId: action.editorId,
			};

		default:
			return state;
	}
};

export default reducer;
