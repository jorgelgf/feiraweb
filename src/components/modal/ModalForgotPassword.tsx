import { FormEvent } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, validationModal } from '../../store';

interface ModalForgotPasswordProps {
  onClick?: () => void
}
export const ModalForgotPassword = ({ onClick }: ModalForgotPasswordProps) => {
  const isModalActive = useSelector((state: RootState) => state.modalForgotPassword.isModalActive);

  const dispatch = useDispatch()

  const handleClickCloseModal = () => {
    return dispatch(validationModal({ isModalActive: !isModalActive }))
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    handleClickCloseModal()
  }
  return (
    <div onClick={onClick} className='flex flex-1 flex-col h-full w-full  '>
      <div className='p-2 w-full '>
        <div className='cursor-pointer text-red-700 w-4' onClick={handleClickCloseModal}>
          X
        </div>
      </div>
      <div className=' flex flex-1 flex-col justify-center items-center  px-4'>
        <div className='font-medium text-zinc-700 w-full text-start h-1/4'>
          Insira o seu e-mail
        </div>
        <form onSubmit={handleSubmit}>
          <label className='w-full styleLabel' htmlFor='email'>E-mail</label>
          <Input id='email' type='email' required name='email' />
          <Button type='submit' className='w-full mt-3'>Enviar</Button>
        </form>
      </div>
      <div >

      </div>
    </div>
  )
}