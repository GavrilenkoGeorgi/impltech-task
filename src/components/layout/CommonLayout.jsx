import React from 'react'
import { children } from '../../propTypes'

import classes from './CommonLayout.module.sass'

const CommonLayout = ({ children }) => {
	return <main className={classes.commonLayout}>
		{children}
	</main>
}

CommonLayout.propTypes = {
	children
}

export default CommonLayout
