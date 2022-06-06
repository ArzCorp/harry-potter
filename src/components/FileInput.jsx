import { useRef } from 'react'

export default function FileInput({ label, name, onChange, ...props }) {
	const file = useRef()

	const handleChange = (e) => {
		e.preventDefault()
		const dataFile = file.current.files[0]
		var reader = new FileReader()

		reader.onloadend = function () {
			onChange({
				target: {
					name,
					value: reader.result,
				},
			})
		}

		if (dataFile) return reader.readAsDataURL(dataFile)
	}

	return (
		<div className="input-file">
			<p className="input-file__container">
				{label}
				<input
					ref={file}
					className="input-file__field"
					type="file"
					name={name}
					onChange={handleChange}
					accept="image/*"
					{...props}
				/>
			</p>
		</div>
	)
}
