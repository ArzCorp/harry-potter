import { useState } from 'react'

export default function useForm({ initialState, onSubmit }) {
	const [values, setValues] = useState(initialState)

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(values)
	}

	return { handleChange, values, handleSubmit }
}
