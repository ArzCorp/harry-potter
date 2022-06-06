import { useEffect, useState } from 'react'

const URL = 'http://localhost:5001/'

export default function useRequest({ endpoint, method = 'GET', ...args }) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [data, setData] = useState([])

	const request = async () => {
		const api = URL + endpoint

		setLoading(true)
		try {
			const response = await fetch(api, {
				method,
				headers: {
					'Content-Type': 'application/json',
				},
				...args,
			})
			const currentData = await response.json()
			setData(currentData)
		} catch (error) {
			setError(error.message)
		}

		setLoading(false)
	}

	useEffect(() => {
		if (method === 'GET') {
			request()
		}
	}, [endpoint])

	return { data, loading, error, request }
}
