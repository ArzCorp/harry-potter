export default function filterReducer(state = 'characters', action) {
	switch (action.type) {
		case 'STAFF':
			return 'characters?hogwartsStudent=false'
		case 'STUDENTS':
			return 'characters?hogwartsStudent=true'
		case 'ALL':
			return 'characters'
		default:
			return state
	}
}
