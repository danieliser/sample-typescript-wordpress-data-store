/**
 * Example of using the custom data store in a plugin.
 *
 * No guarantees this functions at all, but the types here are correct as examples go.
 */
import { callToActionStore } from '../custom-store/store';
import { store as coreDataStore } from '@wordpress/core-data';

import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';

const App = () => {
	const [ appEditorId, setAppEditorId ] = useState< string | number >( 0 );

	const { editorId, userCanEdit } = useSelect(
		( select ) => ( {
			editorId: select( callToActionStore ).getEditorId(),
			userCanEdit: select( coreDataStore ).canUser(
				'edit',
				'post',
				editorId
			),
		} ),
		[ appEditorId ]
	);

	const { sampleAction } = useDispatch( callToActionStore );

	useEffect( () => {
		sampleAction( 0 );
	}, [] );

	useEffect( () => {
		setAppEditorId( editorId );
	}, [ editorId ] );

	return (
		<div>
			{ editorId }
			<button onClick={ () => sampleAction( Number( editorId ) + 1 ) }>
				Dispatch
			</button>
			<br />
			User Can Edit: { userCanEdit ? 'Yes' : 'No' }
		</div>
	);
};

export default App;
