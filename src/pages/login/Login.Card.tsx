import { Card, FormLogin } from '@/components'
import { LogInIcon } from 'lucide-react'
import { formFields, textField } from './Login.constants'
export const LoginCard = () => {

  return (
    <Card>
      <div className='py-3 flex flex-col items-center flex-1'>
        <LogInIcon size={30} color='#7c7777' cursor='pointer' />
        <div className=' flex flex-col flex-1 justify-center p-3'>
          <text className='text-zinc-900 font-bold pt-3 text-center'>
            {textField.title}
          </text>
          <text className='text-[.8rem] font-light text-zinc-600 pb-2 text-center'>
            {textField.subtitle}
          </text>
          <FormLogin fields={formFields} />
        </div>
      </div>
    </Card>
  )
}