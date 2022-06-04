import { useSelector } from 'react-redux'
import favoriteIon from '../img/favorite-icon.svg'
import Button from './Button'

export default function Character() {
	const state = useSelector((state) => state)

	return (
		<div className="character">
			<p>{state.text}</p>
			<img src={favoriteIon} alt="" />
			<Button>Staff</Button>
		</div>
	)
}
