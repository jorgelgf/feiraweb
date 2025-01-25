import { RootState, validationModal } from '@/store'
import { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useModalForgotPassword = () => {

  const isModalActive = useSelector((state: RootState) => state.modalForgotPassword.isModalActive);

  const dispatch = useDispatch()

  const handleClickCloseModal = () => {
    return dispatch(validationModal({ isModalActive: !isModalActive }))
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    handleClickCloseModal()
  }
  return { handleSubmit, handleClickCloseModal }
}