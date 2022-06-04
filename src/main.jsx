import './scss/main.scss'

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import App from './App'

const initialState = {
	text: 'Hola mundo',
}

const store = createStore((state = initialState) => {
	return state
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
