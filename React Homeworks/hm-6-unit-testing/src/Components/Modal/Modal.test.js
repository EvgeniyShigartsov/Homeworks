import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Modal } from './Modal'
import { Provider } from 'react-redux'
import { store } from '../../store/index.js'

test('modal test', () => {
    render(
        <Provider store={store}>
            <Modal isOpen={true} />
        </Provider>
    )
    const modal = screen.getByTitle('modal')
    expect(modal).toBeDefined()
    expect(modal).toBeInTheDocument()
    expect(modal).toBeEnabled()
    expect(modal).toBeTruthy()
})
