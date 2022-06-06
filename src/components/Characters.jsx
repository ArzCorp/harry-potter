import useRequest from '../hooks/useRequest'

import Filters from './Filters'
import Character from './Character'
import { useSelector } from 'react-redux'

export default function Characters() {
	const filter = useSelector((state) => state.filter)
	const { data } = useRequest({ endpoint: filter })

	return (
		<div className="characters">
			<Filters />
			<div className="characters__container">
				{data.map((item) => (
					<Character key={item.name} character={item} {...item} />
				))}
			</div>
		</div>
	)
}
