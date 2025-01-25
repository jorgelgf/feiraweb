import { AppDispatch, RootState, validationModal } from '@/store'
import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useFormLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch: AppDispatch = useDispatch()

  const isModalActive = useSelector((state: RootState) => state.modalForgotPassword.isModalActive)
  const handleToggleModal = () => dispatch(validationModal({ isModalActive: !isModalActive }))


  const handleSubmitLogin = (event: FormEvent) => {
    event?.preventDefault()
    alert(`${email} || ${password} `)
  }

  return { isModalActive, handleSubmitLogin, setPassword, setEmail, handleToggleModal }
}