import { RootState, validationModal } from '@/store'
import { useDispatch, useSelector } from 'react-redux'

export const useModal = () => {
  const isModalActive = useSelector((state: RootState) => state.modalForgotPassword.isModalActive);
  const dispatch = useDispatch()

  const handleClickCloseModal = () => {
    return dispatch(validationModal({ isModalActive: !isModalActive }))
  }
  return { handleClickCloseModal }
}