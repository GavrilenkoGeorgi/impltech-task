import React from 'react'
import { person } from '../../propTypes'

import classes from './Person.module.sass'

const Person = ({ person }) => {
	return <article className={classes.container}>
		<h2 className={classes.header}>{ person.name }</h2>
		<em>Birth year: { person.birth_year }</em>
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
	comments: []
}

const MemodPerson = React.memo(Person)

export default MemodPerson
