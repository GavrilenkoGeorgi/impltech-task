import { swAPI } from '../swAPI'
import URIs from '../URIs'

export const getPeople = async () => {
	const { data } = await swAPI.get(URIs.people)
	return data
}
