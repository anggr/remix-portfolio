import { test, expect, vi } from 'vitest'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import Login from '../app/routes/login'

test('submits form and calls onSubmit with form data', async () => {
  const onSubmit = vi.fn()
  render(<Login />)

  const emailInput = screen.getByLabelText(/email/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const submitButton = screen.getByText(/login/i)

  fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } })
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } })
  fireEvent.click(submitButton)

  await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
    email: 'testuser@example.com',
    password: 'testpassword',
  }))
})
