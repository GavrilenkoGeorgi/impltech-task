import React from 'react'
import { func } from 'prop-types'

const Button = props => {

	return <button
		onClick={props.onClick}
	>
		Add Comment
	</button>
}

Button.propTypes = {
	onClick: func.isRequired
}

export default Button
