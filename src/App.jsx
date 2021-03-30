import React from 'react'
import CommonLayout from './components/layout/CommonLayout'
import PeopleView from './components/people/PeopleView'

const App = () => {
	console.log('Env', process.env.REACT_APP_API_URL)
	return <CommonLayout>
		<PeopleView />
	</CommonLayout>
}

export default App
