import useRequest from './hooks/useRequest'

import Layout from './components/Layout'
import Character from './components/Character'
import ActionButtons from './components/ActionButtons'

function App() {
	const { loading, error } = useRequest({ endpoint: 'characters' })

	if (loading || error) return <p>{error || 'Cargando...'}</p>

	return (
		<Layout>
			<ActionButtons />
			<Character />
		</Layout>
	)
}

export default App
