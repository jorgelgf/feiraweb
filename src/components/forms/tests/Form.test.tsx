import '@testing-library/jest-dom'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { FormLogin } from '../FormLogin'
import { vi } from 'vitest'
import { constants } from '../constants'

global.alert = vi.fn()

describe("Tests in the FormLogin component ", () => {
  const fields = [
    { label: 'Email', type: 'email', placeholder: 'Digite seu e-mail', require: true },
    { label: 'Senha', type: 'password', placeholder: 'Digite sua senha', require: true }
  ]
  it("Should have Google Icon", () => {
    render(<FormLogin fields={fields} />)

    //testing id for google icon
    expect(screen.getByTestId('iconGoogle')).toBeInTheDocument();
  })
  it("Should render the password and login fields.", () => {
    render(<FormLogin fields={fields} />)

    //Find label with name Email and placeholder Digite seu e-mail
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Digite seu e-mail')).toBeInTheDocument()

    //find label with name Senha and placeholder Digite sua senha
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument()

  })

  it("Should call alert with the input values. ", async () => {
    render(<FormLogin fields={fields} />);

    //Simulating typing in a email field
    fireEvent.change(screen.getByPlaceholderText('Digite seu e-mail'), {
      target: { value: 'test@example.com' }
    })
    //Simulating typing in a password field
    fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), { target: { value: '123@abc' } })

    // Simulating sending form information
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: constants.textButtonToEnter }));
    })

    // Verificar se o alert foi chamado com os valores corretos
    expect(global.alert).toHaveBeenCalledWith('test@example.com || 123@abc ');
  })


})
