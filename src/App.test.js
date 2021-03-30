import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders list of people', () => {
	render(<App />)
	const heading = screen.getByText(/List of people/i)
	expect(heading).toBeInTheDocument()
})
