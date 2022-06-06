import { useDispatch, useSelector } from 'react-redux'
import favoriteIcon from '../img/favorite-ghost-icon.svg'
import favoriteIconActive from '../img/favorite-icon.svg'

import Icon from './Icon'

export default function Character({
	name,
	alive,
	hogwartsStudent,
	dateOfBirth,
	gender,
	eyeColour,
	hairColour,
	image,
	house,
	character,
}) {
	const dispatch = useDispatch()
	const favorites = useSelector((state) => state.favorites)
	const isStudent = hogwartsStudent ? '/ ESTUDIANTE' : '/ STAFF'
	const isAlive = alive ? 'VIVO ' : 'FINADO '
	const isAliveColor = alive ? 'character' : 'character--dead'

	const isFavorite =
		favorites.filter((favorite) => favorite.name === name).length > 0

	const isFavoriteStyle = isFavorite ? 'character__is-favorite' : ''
	const isFavoriteIcon = isFavorite ? favoriteIconActive : favoriteIcon

	return (
		<div className={`${isAliveColor}`}>
			<figure
				className={`${house ? house.toLowerCase() : 'bg-color'} character__img`}
			>
				<img src={image} alt={`Foto ${name}`} />
			</figure>
			<div className="character__details">
				<div className="character__icon-container">
					<p className="character__is-alive">{`${isAlive}${isStudent}`}</p>
					<Icon
						className={`${isFavoriteStyle}`}
						icon={isFavoriteIcon}
						alt="Agregar a favoritos"
						onClick={() => {
							if (!isFavorite) {
								dispatch({
									type: 'ADD_FAVORITE',
									payload: character,
								})
							}
						}}
					/>
				</div>
				<h2 className="character__name">
					{!alive ? <b>+</b> : ''} {name}
				</h2>
				<p>
					<b>Cumpleaños: </b>
					{dateOfBirth}
				</p>
				<p>
					<b>Género: </b>
					{gender}
				</p>
				<p>
					<b>Color de ojos: </b>
					{eyeColour}
				</p>
				<p>
					<b>Color de pelo: </b>
					{hairColour}
				</p>
			</div>
		</div>
	)
}
