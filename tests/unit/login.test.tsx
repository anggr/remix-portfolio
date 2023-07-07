import { test, expect, vi } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import Login from '../../app/routes/login'
// Mock the session.server module
vi.mock('~/session.server', () => ({
  getSession: () => ({ user: null }), // Replace with the expected session data
}))

test('submits form and calls onSubmit with form data', async () => {
  // Create a mock onSubmit function
  const onSubmit = vi.fn()

  // Pass the mock function as a prop when you render the component
  render(<Login onSubmit={onSubmit} />)

  const emailInput = screen.getByLabelText(/email/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const submitButton = screen.getByText(/login/i)

  fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } })
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } })
  fireEvent.click(submitButton)

  // Check that the onSubmit function was called with the correct data
  expect(onSubmit).toBeCalledWith({
    email: 'testuser@example.com',
    password: 'testpassword',
  })
})
