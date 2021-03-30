import React from 'react'
import { func, string } from 'prop-types'
import { useInput } from '../../hooks/useInput'

import classes from './NewCommentForm.module.sass'

const NewCommentForm = ({ id, addComment }) => {

	const { value, bind, reset } = useInput('')

	const handleSubmit = event => {
		event.preventDefault()
		addComment(id, value)
		reset()
	}

	return <form onSubmit={handleSubmit} className={classes.form}>
		<label>
			<textarea
				className={classes.textarea}
				rows="3"
				required
				placeholder="Your comment.."
				{...bind}
			/>
		</label>
		<input
			className={classes.button}
			type="submit"
			value="add"
		/>
	</form>
}

NewCommentForm.propTypes= {
	id: string.isRequired,
	addComment: func.isRequired
}

export default NewCommentForm
