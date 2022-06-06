export default function Modal({ open, onClose, title = 'Titulo', children }) {
	const isOpen = open ? 'modal--open' : 'modal'

	return (
		<div className={`${isOpen}`}>
			<div className="modal__container">
				<div className="modal__close-container">
					<h2>{title}</h2>
					<span className="modal__close">x</span>
				</div>
				{children}
			</div>
		</div>
	)
}
