import { useDispatch, useSelector } from 'react-redux'

export default function Modal({ title = 'Titulo', children }) {
	const open = useSelector((state) => state.modal)
	const dispatch = useDispatch()
	const isOpen = open ? 'modal--open' : 'modal'

	return (
		<div className={`${isOpen}`}>
			<div className="modal__container">
				<div className="modal__close-container">
					<h2>{title}</h2>
					<span
						className="modal__close"
						onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
					>
						x
					</span>
				</div>
				{children}
			</div>
		</div>
	)
}
