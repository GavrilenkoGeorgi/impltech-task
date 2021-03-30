import React, { useEffect, useState } from 'react'
import { getPeople } from '../../api/people'

const PeopleView = () => {

	const [ list, setList ] = useState([])

	useEffect(() => {
		getPeople().then(({ results }) => {
			console.log('People view', results)
			setList(results)
		})
	}, [])

	const List = () => <>
		{list.map(item => (
			<p key={item.name}>
				{item.name}
				{item.birth_year}
			</p>
		))}
	</>

	return <>
		<h1>List of people</h1>
	 {list.length ? <List /> : 'Loading...' }
	</>
}

export default PeopleView
