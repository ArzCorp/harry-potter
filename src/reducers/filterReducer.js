export default function filterReducer(state = 'characters', action) {
	switch (action.type) {
		case 'STAFF':
			return 'staff'
		case 'STUDENTS':
			return 'students'
		case 'ALL':
			return 'characters'
		default:
			return state
	}
}
