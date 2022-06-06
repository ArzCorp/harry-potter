export default function TextInput({ label, name, ...props }) {
	return (
		<div className="input">
			<label className="input__label" htmlFor={name}>
				{label}
			</label>
			<input className="input__field" type="text" name={name} {...props} />
		</div>
	)
}
