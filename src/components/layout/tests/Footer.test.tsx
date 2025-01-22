import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer.'
import { constants } from '../constants'
import { expect } from 'vitest'

describe("Testing the Footer component", () => {
  it("Should Footer component with text", () => {
    render(<Footer />)
    expect(screen.getByText(constants.textFooter)).toBeInTheDocument()
  })
})