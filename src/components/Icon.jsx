export default function Icon({ icon, alt, white, ...props }) {
	const iconColor = white ? 'icon--black' : ''

	return <img className={`${iconColor}`} src={icon} alt={alt} {...props} />
}
