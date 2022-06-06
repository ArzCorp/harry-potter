import './scss/main.scss'

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { reducer } from './reducers/Reducer'

import App from './App'

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
)
