import { genders } from '../../utils/static/genders'
import { positions } from '../../utils/static/positions'
import Button from '../Button'

import Options from '../Options'
import TextInput from '../TextInput'
import FileInput from '../FileInput'

export default function AddCharacterForm() {
	return (
		<form className="character-form">
			<div className="character-form__container">
				<div className="character-form__col">
					<TextInput label="NOMBRE" />
					<TextInput label="COLOR DE OJOS" />
					<Options label="GÉNERO" options={genders} />
				</div>
				<div className="character-form__col">
					<TextInput label="CUMPLEAÑOS" />
					<TextInput label="COLOR DE PELO" />
					<Options label="POSICIÓN" options={positions} />
				</div>
			</div>
			<FileInput label="FOTOGRAFIA" />
			<div className="character-form__button">
				<Button>GUARDAR</Button>
			</div>
		</form>
	)
}
