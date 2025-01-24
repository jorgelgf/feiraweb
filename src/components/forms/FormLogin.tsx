import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { constants } from './constants'
import { FormEvent, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './../../store'
import { validationModal } from './../../store'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch: AppDispatch = useDispatch()

  const isModalActive = useSelector((state: RootState) => state.modalForgotPassword.isModalActive)

  const handleSubmitLogin = (event: FormEvent) => {
    event?.preventDefault()
    alert(`${email} || ${password} `)
  }

  const handleToggleModal = () => dispatch(validationModal({ isModalActive: !isModalActive }))

  return fields ?
    (
      <div>
        <form className='flex flex-col pt-4' onSubmit={handleSubmitLogin}>
          {fields.map((item, key) => {
            return (
              <div key={key}>
                <label htmlFor={item.label} className='styleLabel'>
                  {item.label}
                </label>
                <Input
                  id={item.label}
                  required
                  className='mb-3'
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
            <div onClick={handleToggleModal} className={constants.classNameForgotText}>
              {constants.forgotPass}
            </div>
          </div>
          <div className='mt-2 w-full flex justify-end pt-1'>
            <Button type='submit' className='w-full' >{constants.textButtonToEnter}</Button>
          </div>
        </form>
        <div className='flex justify-center items-center mt-4  flex-col'>
          <span className={constants.classNameTextToEnterWithGoogle}>{constants.textEnterWhitGoogle}</span>
          <span className={constants.classNameDivIconGoogle}><FcGoogle data-testid='iconGoogle' /></span>
        </div>
      </div>
    ) : (null)
}
