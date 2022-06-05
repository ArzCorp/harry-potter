export default function Button({ active, ...props }) {
	const isActive = active ? 'button--active' : 'button'

	return <button className={isActive} {...props} />
}
