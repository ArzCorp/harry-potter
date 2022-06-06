import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'

export default function Filters() {
	const filter = useSelector((state) => state.filter)
	const dispatch = useDispatch()

	return (
		<div className="filters">
			<h2 className="filters__title">Selecciona tu filtro</h2>
			<div className="filters__buttons">
				<Button
					active={filter === 'students'}
					onClick={() => dispatch({ type: 'STUDENTS' })}
				>
					ESTUDIANTES
				</Button>
				<Button
					active={filter === 'staff'}
					onClick={() => dispatch({ type: 'STAFF' })}
				>
					STAFF
				</Button>
			</div>
		</div>
	)
}
