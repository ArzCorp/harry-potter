import useForm from '../../hooks/useForn'
import useRequest from '../../hooks/useRequest'
import { genders } from '../../utils/static/genders'
import { positions } from '../../utils/static/positions'
import { useDispatch } from 'react-redux'

import Button from '../Button'
import Options from '../Options'
import TextInput from '../TextInput'
import FileInput from '../FileInput'

export default function AddCharacterForm() {
	const dispatch = useDispatch()
	const { request } = useRequest({ method: 'POST', endpoint: 'characters' })
	const { values, handleSubmit, handleChange } = useForm({
		initialState: {
			id: crypto.randomUUID(),
			alive: true,
			gender: 'male',
			hogwartsStudent: true,
		},
		onSubmit: (e) => {
			request(e)
			dispatch({ type: 'CLOSE_MODAL' })
			dispatch({ type: 'ALL' })
		},
	})

	return (
		<form onSubmit={handleSubmit} className="character-form">
			<div className="character-form__container">
				<div className="character-form__col">
					<TextInput name="name" label="NOMBRE" onChange={handleChange} />
					<TextInput
						name="eyeColour"
						label="COLOR DE OJOS"
						onChange={handleChange}
					/>
					<Options
						value={values.gender}
						name="gender"
						onChange={handleChange}
						label="GÉNERO"
						options={genders}
					/>
				</div>
				<div className="character-form__col">
					<TextInput
						name="dateOfBirth"
						label="CUMPLEAÑOS"
						onChange={handleChange}
					/>
					<TextInput
						name="hairColour"
						label="COLOR DE PELO"
						onChange={handleChange}
					/>
					<Options
						name="hogwartsStudent"
						value={values.hogwartsStudent}
						label="POSICIÓN"
						onChange={handleChange}
						options={positions}
					/>
				</div>
			</div>
			<FileInput name="image" label="FOTOGRAFIA" onChange={handleChange} />
			<div className="character-form__button">
				<Button type="submit">GUARDAR</Button>
			</div>
		</form>
	)
}
