import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { constants } from './constants'
import { useModalValidationForgotPassword } from '@/hooks/use-ModalValidationForgotPassword';

interface ModalForgotPasswordProps {
  onClick?: () => void
}
export default function ModalForgotPassword({ onClick }: ModalForgotPasswordProps) {
  const { handleSubmitLogin, handleToggleModal } = useModalValidationForgotPassword()
  return (
    <div onClick={onClick} className='flex flex-1 flex-col h-full w-full  '>
      <div className='p-2 w-full '>
        <div className='cursor-pointer text-red-400 w-4 hover:text-red-700' onClick={handleToggleModal}>
          {constants.textCloseModal}
        </div>
      </div>
      <div className=' flex flex-1 flex-col justify-center items-center  px-4'>
        <div className='font-medium text-zinc-700 w-full text-start h-1/4'>
          {constants.TextInsertEmail}
        </div>
        <form onSubmit={handleSubmitLogin}>
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