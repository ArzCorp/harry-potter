import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducer'
import filterReducer from './filterReducer'
import modalReducer from './modalReducers'

export const reducer = combineReducers({
	modal: modalReducer,
	favorites: favoritesReducer,
	filter: filterReducer,
})
