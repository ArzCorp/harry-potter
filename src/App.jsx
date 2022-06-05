import Layout from './components/Layout'
import Characters from './components/Characters'
import ActionButtons from './components/ActionButtons'
import Header from './components/Header'

function App() {
	return (
		<Layout>
			<ActionButtons />
			<Header />
			<Characters />
		</Layout>
	)
}

export default App
