import { useSelector } from 'react-redux'

export default function Character() {
	const state = useSelector((state) => state)

	return <p>{state.text}</p>
}
