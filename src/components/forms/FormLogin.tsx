import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { constants } from './constants'
import { useState } from 'react'
import { FcGoogle } from "react-icons/fc";

export interface FormLoginProps {
  label?: string
  type?: string
  placeholder?: string
  onChange?: () => void
  require: boolean
}

export type FormLoginTypes = {
  fields: FormLoginProps[]
}

export const FormLogin = ({ fields }: FormLoginTypes) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const handleSubmitLogin = () => {
    event?.preventDefault()
    alert(`${email} || ${password} `)
  }
  return fields ?
    (
      <div>
        <form className='flex flex-col pt-4' onSubmit={handleSubmitLogin}>

          {fields.map((item, key) => {
            return (
              <div key={key}>
                <label htmlFor={item.label} className=' text-sm font-medium text-zinc-500'>
                  {item.label}
                </label>
                <Input
                  id={item.label}
                  required
                  onChange={(event) => {
                    if (item.label === 'Email') {
                      return setEmail(event?.target.value)
                    } else if (item.label === 'Senha') {
                      return setPassword(event?.target.value)
                    }
                  }}
                  type={item.type}
                  placeholder={item.placeholder} />
              </div>
            )
          })}
          <div>
            <div className={constants.classNameForgotText}>
              {constants.forgotPass}
            </div>
          </div>
          <div className='mt-2 w-full flex justify-end pt-1'>
            <Button type='submit' className='w-full' >{constants.textButtonToEnter}</Button>
          </div>
        </form>
        <div className='flex justify-center items-center mt-4  flex-col'>
          <span className={constants.classNameTextToEnterWithGoogle}>{constants.textEnterWhitGoogle}</span>
          <span className={constants.classNameDivIconGoogle}><FcGoogle /></span>
        </div>
      </div>
    ) : (null)
}
