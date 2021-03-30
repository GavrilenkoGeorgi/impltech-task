import React from 'react'
import { func, string } from 'prop-types'
import { useInput } from '../../hooks/useInput'

const NewCommentForm = ({ name, addComment }) => {

	const { value, bind, reset } = useInput('')

	const handleSubmit = event => {
		event.preventDefault()
		addComment(name, value)
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
	name: string.isRequired,
	addComment: func.isRequired
}

export default NewCommentForm
