export default function charactersReducer(state, action) {
	switch (action.type) {
		case 'ADD_CHARACTERS':
			return action.payload
		default:
			return state
	}
}
