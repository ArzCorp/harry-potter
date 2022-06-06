import trashIcon from '../img/trash-icon.svg'

import Icon from './Icon'

export default function Favorite({ name, image }) {
	return (
		<li className="favorite">
			<div className="favorite__character">
				<figure className="favorite__image-container">
					<img className="favorite__image" src={image} alt={`Foto ${name}`} />
				</figure>
				<p className="favorite__name">{name}</p>
			</div>
			<Icon icon={trashIcon} alt="Eliminar de favoritos" />
		</li>
	)
}
