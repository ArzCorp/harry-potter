import { useSelector } from 'react-redux'

import Favorite from './Favorite'

export default function FavoritesList({ isOpen }) {
	const favorites = useSelector((state) => state.favorites)
	const show = isOpen ? 'favorites-list--show' : 'favorites-list'

	return (
		<ul className={`${show}`}>
			{favorites.length > 0 ? (
				favorites.map((favorite, idx) => (
					<Favorite key={favorite.name} position={idx} {...favorite} />
				))
			) : (
				<p className="favorites-list__no-favorites">No tienes favoritos</p>
			)}
		</ul>
	)
}
