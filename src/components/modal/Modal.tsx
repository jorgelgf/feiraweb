import { ReactNode } from 'react'
import { useModal } from './Modal.modal'

interface ModalProps {
  children: ReactNode
}
export const Modal = ({ children }: ModalProps) => {
  const { handleClickCloseModal } = useModal()

  return (
    <>
      <div onClick={handleClickCloseModal} className='z-10 fixed top-0 left-0 w-full h-screen bg-[#575656d4]'></div>
      <div className=
        'animate-slide-up z-20 bg-white fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-lg shadow-neutral-950 '
      >{children}</div>
    </>
  )
}