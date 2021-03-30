import React, { useEffect, useState } from 'react'
import { getPeople } from '../../api/people'

import Person from './Person'
import NewCommentForm from '../comments/NewCommentForm'
import { addCommentsAndIdFields, generateSimpleID } from '../../utils'

const PeopleList = () => {
	const [ list, setList ] = useState([])

	useEffect(() => {
		getPeople().then(({ results }) => {
			setList(addCommentsAndIdFields(results))
		})
	}, [])

	const addComment = (id, comment) => {
		const newComment = {
			id: generateSimpleID(),
			comment
		}

		const result = list.map(person =>
			person.id === id
				? { ...person, comments: [ ...person.comments, newComment ] }
				: person)

		setList(() => [ ...result ] )
	}

	return <>
		{list.length && list.map(person => (
			<section key={person.id}>
				<Person
					person={person}
				/>
				<NewCommentForm
					id={person.id}
					addComment={addComment}
				/>
			</section>
		))}
	</>
}

export default PeopleList
