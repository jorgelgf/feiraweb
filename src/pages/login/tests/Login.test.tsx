
import { render, screen } from '@testing-library/react'
import { Login } from '../Login'

describe("Testing the Login Component", () => {
  it("Should render the login component with an article inside", () => {
    render(<Login />)
    //Find children of the article
    expect(screen.getByRole('article')).toBeInTheDocument()
  })
  it("Should render the LoginCard component", () => {
    render(<Login />)

    //To validate that the login card component is being rendered, 
    // a search for a text that is inside the loginCard is used
    expect(screen.getByText("Senha")).toBeInTheDocument()
  })
})