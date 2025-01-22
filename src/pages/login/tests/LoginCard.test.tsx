import { render, screen } from '@testing-library/react'
import { LoginCard } from '../Login.Card'

describe("Testing the component LoginCard", () => {
  it("Should render the login icon with an image", () => {
    render(<LoginCard />)

    //Testing the rendered iconLogin image
    expect(screen.getByTestId('LogInIcon')).toBeInTheDocument()
  })
  it("Should render the FormLogin component ", () => {
    render(<LoginCard />)

    //Validating that the FormLogin component is being rendered 
    // by looking for text contained within the FormLogin itself
    expect(screen.getByText('Entrar')).toBeInTheDocument()
  })
})