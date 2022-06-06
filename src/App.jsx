import Layout from './components/Layout'
import Characters from './components/Characters'
import ActionButtons from './components/ActionButtons'
import Header from './components/Header'
import Modal from './components/Modal'
import AddCharacterForm from './components/forms/AddCharacterForm'

function App() {
	return (
		<Layout>
			<ActionButtons />
			<Header />
			<Characters />
			<Modal title="Agrega un personaje">
				<AddCharacterForm />
			</Modal>
		</Layout>
	)
}

export default App
