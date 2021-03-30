import React from 'react'
import { person } from '../../propTypes'

const Person = ({ person }) => {
	return <article>
		<h2>{ person.name }</h2>
		<em>{ person.birth_year }</em>
		{person.comments.map(item =>
			<p key={item.id}>
				{ item.comment }
			</p>
		)}
	</article>
}

Person.propTypes = {
	person
}

Person.defaultProps = {
	name: 'Name required',
	birth_year: 'Year required',
}

const MemodPerson = React.memo(Person)

export default MemodPerson
