export default function TextInput({ label, name, ...props }) {
	return (
		<div className="input-file">
			<p className="input-file__container">
				{label}
				<input
					className="input-file__field"
					type="file"
					name={name}
					{...props}
				/>
			</p>
		</div>
	)
}
