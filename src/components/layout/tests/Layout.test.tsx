import { render, screen } from '@testing-library/react'
import { Layout } from '../Layout'
import { Header } from '../Header'
import { Footer } from '../Footer.'

describe("Testing the Layout component", () => {
  it("Should render Layout with children", () => {
    render(<Layout><div><Header /><main>teste</main><Footer /></div></Layout>)
    expect(screen.getByText("teste")).toBeInTheDocument()
  })

})