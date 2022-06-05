import favoriteIcon from '../img/favorite-icon.svg'
import AddIcon from '../img/add-icon.svg'

import Icon from './Icon'

export default function ActionButtons() {
	return (
		<div className="action-buttons">
			<button title="favoritos" className="button__action--left">
				FAVORITOS <Icon icon={favoriteIcon} alt="icono de favoritos" />
			</button>
			<button title="agregar" className="button__action--right">
				AGREGAR <Icon icon={AddIcon} alt="icono de agregar" />
			</button>
		</div>
	)
}
