import axios from 'axios'

const defaults = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
}

export const swAPI = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		get: defaults
	}
})
