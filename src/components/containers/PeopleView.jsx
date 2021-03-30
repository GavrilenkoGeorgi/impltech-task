import React from 'react'

import PeopleList from '../people/PeopleList'
import classes from './PeopleView.module.sass'

const PeopleView = () => {
	return <>
		<h1 className={classes.header}>List of people</h1>
		<section className={classes.container}>
			<PeopleList />
		</section>
	</>
}

export default PeopleView
