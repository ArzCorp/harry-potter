import Button from './Button'

export default function Filters() {
	return (
		<div className="filters">
			<h2 className="filters__title">Selecciona tu filtro</h2>
			<div className="filters__buttons">
				<Button>ESTUDIANTES</Button>
				<Button>STAFF</Button>
			</div>
		</div>
	)
}
