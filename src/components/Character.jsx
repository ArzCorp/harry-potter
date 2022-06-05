import favoriteIcon from '../img/favorite-ghost-icon.svg'

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
}) {
	const isStudent = hogwartsStudent ? '/ ESTUDIANTE' : '/ STAFF'
	const isAlive = alive ? 'VIVO ' : 'FINADO '
	const isAliveColor = alive ? 'character__details' : 'character__details--dead'

	return (
		<div className="character">
			<figure
				className={`${house ? house.toLowerCase() : 'bg-color'} character__img`}
			>
				<img src={image} alt={`Foto ${name}`} />
			</figure>
			<div className={`${isAliveColor}`}>
				<div className="character__icon-container">
					<p>{`${isAlive}${isStudent}`}</p>
					<Icon icon={favoriteIcon} />
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
