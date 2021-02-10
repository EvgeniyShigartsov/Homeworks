import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from './Button'

test('button test', () => {
    render(<Button classList="test" backgroundColor="red" onClick={() => console.log('click')} text="test" />)
    const button = screen.getByRole('button')
    expect(button).toBeDefined()
    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
    expect(button).toBeTruthy()
})
