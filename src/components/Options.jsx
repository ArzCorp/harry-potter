export default function Options({
	name,
	label,
	options = [],
	value,
	onChange,
}) {
	return (
		<div className="options">
			<label className="options__label">{label}</label>
			<div className="options__container">
				{options.map((option) => (
					<div key={option.id} className="options__option">
						<input
							type="radio"
							name={name}
							checked={value === option.value}
							onChange={() =>
								onChange({ target: { name, value: option.value } })
							}
						/>
						<p>{option.label}</p>
					</div>
				))}
			</div>
		</div>
	)
}
