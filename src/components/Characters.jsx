import useRequest from '../hooks/useRequest'

import Filters from './Filters'
import Character from './Character'

export default function Characters() {
	const { data } = useRequest({ endpoint: 'characters' })

	return (
		<div className="characters">
			<Filters />
			<div className="characters__container">
				{data.map((item) => (
					<Character key={item.name} {...item} />
				))}
			</div>
		</div>
	)
}
