import { ReactNode } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState, validationModal } from '../../store';

interface ModalProps {
  children: ReactNode
}
export const Modal = ({ children }: ModalProps) => {
  const isModalActive = useSelector((state: RootState) => state.modalForgotPassword.isModalActive);
  const dispatch = useDispatch()

  const handleClickCloseModal = () => {
    return dispatch(validationModal({ isModalActive: !isModalActive }))
  }

  return (

    <>
      <div onClick={handleClickCloseModal} className='z-0 fixed top-0 left-0 w-full h-screen bg-[#575656d4]'></div>
      <div className=
        'animate-slide-up z-10 bg-white fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-lg shadow-neutral-950 '
      >{children}</div>
    </>

  )
}