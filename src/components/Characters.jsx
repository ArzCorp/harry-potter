import { useSelector } from 'react-redux'

import Filters from './Filters'

export default function Character() {
	const state = useSelector((state) => state)

	return (
		<div>
			<Filters />
		</div>
	)
}
