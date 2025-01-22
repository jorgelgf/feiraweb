import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

describe("Testing the Header the Component", () => {
  it("Should have an icon in the header", () => {
    render(<Header />)
    expect(screen.getByTestId('iconHeader')).toBeInTheDocument()
  })
})