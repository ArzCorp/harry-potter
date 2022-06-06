export default function favoritesReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_FAVORITE':
			return [...state, action.payload]
		case 'REMOVE_FAVORITE':
			const favorites = state.filter((favorite, idx) => idx !== action.payload)
			return favorites
		default:
			return state
	}
}
