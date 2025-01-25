import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { constants } from './constants'
import { useModalForgotPassword } from './ModalForgotPassword.modal'

interface ModalForgotPasswordProps {
  onClick?: () => void
}
export const ModalForgotPassword = ({ onClick }: ModalForgotPasswordProps) => {
  const { handleSubmit, handleClickCloseModal } = useModalForgotPassword()
  return (
    <div onClick={onClick} className='flex flex-1 flex-col h-full w-full  '>
      <div className='p-2 w-full '>
        <div className='cursor-pointer text-red-400 w-4 hover:text-red-700' onClick={handleClickCloseModal}>
          {constants.textCloseModal}
        </div>
      </div>
      <div className=' flex flex-1 flex-col justify-center items-center  px-4'>
        <div className='font-medium text-zinc-700 w-full text-start h-1/4'>
          {constants.TextInsertEmail}
        </div>
        <form onSubmit={handleSubmit}>
          <label className='w-full styleLabel' htmlFor='email'>{constants.textLabelEmail}</label>
          <Input id='email' type='email' required name='email' />
          <Button type='submit' className='w-full mt-3'>{constants.textButton}</Button>
        </form>
      </div>
      <div >
      </div>
    </div>
  )
}