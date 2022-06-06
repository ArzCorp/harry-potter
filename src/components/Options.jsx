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
					<div className="options__option">
						<input
							key={option.id}
							type="radio"
							name={name}
							checked={value === option.value}
							onChange={onChange}
						/>
						<p>{option.label}</p>
					</div>
				))}
			</div>
		</div>
	)
}
