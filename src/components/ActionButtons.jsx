import { useState } from 'react'
import { useDispatch } from 'react-redux'
import favoriteIcon from '../img/favorite-icon.svg'

import AddIcon from '../img/add-icon.svg'
import Icon from './Icon'
import FavoritesList from './FavoritesList'

export default function ActionButtons() {
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)

	return (
		<div className="action-buttons">
			<button
				title="favoritos"
				className="button__action--left"
				onClick={() => setOpen(!open)}
			>
				FAVORITOS <Icon icon={favoriteIcon} alt="icono de favoritos" />
			</button>
			<button
				title="agregar"
				className="button__action--right"
				onClick={() => dispatch({ type: 'OPEN_MODAL' })}
			>
				AGREGAR <Icon icon={AddIcon} alt="icono de agregar" />
			</button>
			<FavoritesList isOpen={open} />
		</div>
	)
}
