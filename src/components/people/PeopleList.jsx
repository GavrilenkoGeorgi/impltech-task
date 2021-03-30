import React, { useEffect, useState } from 'react'
import { getPeople } from '../../api/people'

import Person from './Person'
import NewCommentForm from '../comments/NewCommentForm'
import { addCommentsField, generateSimpleID } from '../../utils'

const PeopleList = () => {
	const [ list, setList ] = useState([])

	useEffect(() => {
		getPeople().then(({ results }) => {
			setList(addCommentsField(results))
		})
	}, [])

	const addComment = (name, comment) => {
		const newComment = {
			id: generateSimpleID(),
			comment
		}

		const result = list.map(person =>
			person.name === name // should be ID i guess
				? { ...person, comments: [ ...person.comments, newComment ] }
				: person)

		setList(() => [ ...result ] )
	}

	return <>
		{list.length && list.map(person => (
			<section key={person.name}>
				<Person
					person={person}
				/>
				<NewCommentForm
					name={person.name} // Suppose name's are unique identifiers
					addComment={addComment}
				/>
			</section>
		))}
	</>
}

export default PeopleList
