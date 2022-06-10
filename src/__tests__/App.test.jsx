import { render, screen} from '@testing-library/react'
import App from '../App'

describe('render component App', () => {
  test('should work as expected', () => {
    const a = render(<App />)
    const textInDocument = screen.getByText(/Hello Vite /i)
    expect(textInDocument).toBeInTheDocument()
    const o = screen.getByText(/Learn React/i)
    expect(o).toBeInTheDocument()
  })
})
