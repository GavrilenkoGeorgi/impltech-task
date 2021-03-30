import React from 'react'
import { func, string } from 'prop-types'
import { useInput } from '../../hooks/useInput'

const NewCommentForm = ({ id, addComment }) => {

	const { value, bind, reset } = useInput('')

	const handleSubmit = event => {
		event.preventDefault()
		addComment(id, value)
		reset()
	}

	return <form onSubmit={handleSubmit}>
		<label>
			<input
				type="text"
				{...bind}
			/>
		</label>
		<input type="submit" value="Comment" />
	</form>
}

NewCommentForm.propTypes= {
	id: string.isRequired,
	addComment: func.isRequired
}

export default NewCommentForm
